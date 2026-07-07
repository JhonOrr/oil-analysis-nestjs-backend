import { Injectable } from '@nestjs/common';
import { CreateLubricantDto } from '../dto/create-lubricant.dto';
import { UpdateLubricantDto } from '../dto/update-lubricant.dto';
import { Repository } from 'typeorm';
import { Brand } from '../entities/brand.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LubricantsService {

  constructor(

  ){}

  create(createLubricantDto: CreateLubricantDto) {
    return 'This action adds a new lubricant';
  }

  findAll() {
    return `This action returns all lubricants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lubricant`;
  }

  update(id: number, updateLubricantDto: UpdateLubricantDto) {
    return `This action updates a #${id} lubricant`;
  }

  remove(id: number) {
    return `This action removes a #${id} lubricant`;
  }
}
