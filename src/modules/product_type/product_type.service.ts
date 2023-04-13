import { Injectable } from '@nestjs/common';
import { ProductType } from './product_type.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductTypeDto } from './dto/create-product_type.dto';
import { UpdateProductTypeDto } from './dto/update-product_type.dto';

@Injectable()
export class ProductTypeService {
  constructor(
    @InjectRepository(ProductType) private readonly productTypeRepo: Repository<ProductType>,
  ) {}

  findAll() {
    return this.productTypeRepo.find();
  }

  async findOne(id: number) {
    return await this.productTypeRepo.findOneBy({ id })
  }

  async create(data: CreateProductTypeDto) {
    const product_type = await this.productTypeRepo.create(data)
    this.productTypeRepo.save(product_type)
    return product_type
  }

  async update(id: number, body: UpdateProductTypeDto) {
    await this.productTypeRepo.update({ id }, body)
    return await this.productTypeRepo.findOneBy({ id })
  }

  async delete(id: number) {
    return await this.productTypeRepo.delete({ id })
  }
}
