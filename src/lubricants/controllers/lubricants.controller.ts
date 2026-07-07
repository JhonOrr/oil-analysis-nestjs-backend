import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LubricantsService } from '../services/lubricants.service';
import { CreateLubricantDto } from '../dto/create-lubricant.dto';
import { UpdateLubricantDto } from '../dto/update-lubricant.dto';

@Controller('lubricants')
export class LubricantsController {
  constructor(private readonly lubricantsService: LubricantsService) {}

  @Post()
  create(@Body() createLubricantDto: CreateLubricantDto) {
    return this.lubricantsService.create(createLubricantDto);
  }

  @Get()
  findAll() {
    return this.lubricantsService.findAll();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLubricantDto: UpdateLubricantDto) {
    return this.lubricantsService.update(+id, updateLubricantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lubricantsService.remove(+id);
  }
}
