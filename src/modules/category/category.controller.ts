import { Controller, Get, Post, Param, Body, Delete, Patch } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get()
  getAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Post()
  create(@Body() body: CreateCategoryDto) {
    return this.categoryService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: UpdateCategoryDto) {
    this.categoryService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.categoryService.delete(id);
  }
}
