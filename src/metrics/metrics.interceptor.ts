import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, tap } from 'rxjs';
import { MetricsService } from './metrics.service';

@Injectable()
export class MetricsInterceptor implements NestInterceptor {
  constructor(private readonly metricsService: MetricsService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context.switchToHttp().getRequest<Request>();

    if (request.path === '/metrics') {
      return next.handle();
    }

    const response = context.switchToHttp().getResponse<Response>();

    const start = process.hrtime.bigint();

    return next.handle().pipe(
      tap({
        next: () => this.recordMetrics(request, response, start),
        error: () => this.recordMetrics(request, response, start),
      }),
    );
  }

  private recordMetrics(
    request: Request,
    response: Response,
    start: bigint,
  ): void {
    const durationInSeconds =
      Number(process.hrtime.bigint() - start) / 1_000_000_000;

    const method = request.method;
    const route = this.getRoute(request);
    const statusCode = response.statusCode.toString();

    this.metricsService.httpRequestsTotal.inc({
      method,
      route,
      status_code: statusCode,
    });

    this.metricsService.httpRequestDuration.observe(
      {
        method,
        route,
        status_code: statusCode,
      },
      durationInSeconds,
    );
  }

  private getRoute(request: Request): string {
    return request.route?.path ?? request.path;
  }
}
