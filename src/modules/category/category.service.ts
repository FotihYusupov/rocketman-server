import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private readonly userRepo: Repository<Category>,
  ) {}

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: number) {
    return await this.userRepo.findOneBy({ id })
  }

  async create(data: CreateCategoryDto) {
    const user = this.userRepo.create(data)
    await this.userRepo.save(user)
    return user
  }
}
