import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ProductTypeService } from './product_type.service';
import { CreateProductTypeDto } from './dto/create-product_type.dto';
import { UpdateProductTypeDto } from './dto/update-product_type.dto';

@Controller('product-types')
export class ProductTypeController {
  constructor(private readonly productTypeService: ProductTypeService) {}
  @Get()
  getAll() {
    return this.productTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productTypeService.findOne(+id);
  }

  @Post()
  create(@Body() body: CreateProductTypeDto) {
    return this.productTypeService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: UpdateProductTypeDto) {
    this.productTypeService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.productTypeService.delete(id);
  }
}
