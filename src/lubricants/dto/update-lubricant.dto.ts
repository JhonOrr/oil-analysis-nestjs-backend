import { PartialType } from '@nestjs/mapped-types';
import { CreateLubricantDto } from './create-lubricant.dto';

export class UpdateLubricantDto extends PartialType(CreateLubricantDto) {}
