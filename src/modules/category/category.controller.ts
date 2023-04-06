import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly userService: CategoryService) {}
  @Get()
  getAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  create(@Body() body: CreateCategoryDto) {
    return this.userService.create(body);
  }
}
