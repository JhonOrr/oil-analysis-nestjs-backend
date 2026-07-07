import { Module } from '@nestjs/common';
import { LubricantsService } from './services/lubricants.service';
import { LubricantsController } from './controllers/lubricants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';
import { BrandsController } from './controllers/brands.controller';
import { BrandsService } from './services/brands.service';

@Module({
  controllers: [LubricantsController, BrandsController],
  providers: [LubricantsService, BrandsService],
  imports: [TypeOrmModule.forFeature([Brand])]
})
export class LubricantsModule {}
