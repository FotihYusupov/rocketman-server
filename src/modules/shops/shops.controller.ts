import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { CreateShopsDto } from './dto/create-shops.dto';
import { UpdateShopsDto } from './dto/update-shops.dto';

@Controller('shops')
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}
  @Get()
  getAll() {
    return this.shopsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shopsService.findOne(+id);
  }

  @Post()
  create(@Body() body: CreateShopsDto) {
    return this.shopsService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: UpdateShopsDto) {
    this.shopsService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.shopsService.delete(id);
  }
}
