import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Shops } from './shops.entity';
import { Repository } from 'typeorm';
import { CreateShopsDto } from './dto/create-shops.dto';

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(Shops) private readonly shopsRepo: Repository<Shops>,
  ) {}

  findAll() {
    return this.shopsRepo.find();
  }

  async findOne(id: number) {
    return await this.shopsRepo.findOneBy({ id })
  }

  async create(data: CreateShopsDto) {
    const shops = await this.shopsRepo.create(data)
    this.shopsRepo.save(shops)
    return shops
  }

  async update(id: number, body: any) {
    await this.shopsRepo.update({ id }, body)
    return await this.shopsRepo.findOneBy({ id })
  }

  async delete(id: number) {
    return await this.shopsRepo.delete({ id })
  }
}
