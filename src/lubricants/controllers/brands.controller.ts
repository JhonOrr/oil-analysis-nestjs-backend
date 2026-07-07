import { Body, Controller, Get, Post } from "@nestjs/common";
import { BrandsService } from "../services/brands.service";
import { CreateBrandDto } from "../dto/create-brand.dto";

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService){}

  @Get()
  findAll(){
    return this.brandsService.getAll()
  }

  @Post()
  create(@Body() createBrandDto: CreateBrandDto){
    return this.brandsService.create(createBrandDto);
  }
}