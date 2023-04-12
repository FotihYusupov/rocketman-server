import { Controller, Get, Param, Body } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { CreateCategoryDto } from './dto/create-taklif.dto';
import { UpdateCategoryDto } from './dto/update-taklif.dto';
import { TaklifService } from './takliflar.service';

@Controller('takliflar')
export class TaklifController {
  constructor(private readonly TaklifService: TaklifService) {}
  @Get()
  getAll() {
    return this.TaklifService.findAll();
  }

  @Post()
  create(@Body() body: CreateCategoryDto) {
    return this.TaklifService.create(body);
  }
}
