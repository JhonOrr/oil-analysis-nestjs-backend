import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Brand } from "../entities/brand.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBrandDto } from "../dto/create-brand.dto";

@Injectable()
export class BrandsService{
  constructor(
    @InjectRepository(Brand)
    private readonly brandsRepository: Repository<Brand>
  ){}

  getAll(){
    return this.brandsRepository.find();
  }

  async create(createBrandDto: CreateBrandDto){
    try {
      const brand = this.brandsRepository.create(createBrandDto);
      brand.createdAt = new Date();
      brand.updatedAt = new Date();
      await this.brandsRepository.save(brand);
      return brand
    } catch (error){
      throw new InternalServerErrorException(error);
    }
  }
}
