import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly productRepo: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepo.find();
  }

  async findOne(id: number) {
    return await this.productRepo.findOneBy({ id })
  }

  async create(data: CreateProductDto) {
    const product = await this.productRepo.create(data)
    this.productRepo.save(product)
    return product
  }

  async update(id: number, body: UpdateProductDto) {
    await this.productRepo.update({ id }, body)
    return await this.productRepo.findOneBy({ id })
  }

  async delete(id: number) {
    return await this.productRepo.delete({ id })
  }
}
