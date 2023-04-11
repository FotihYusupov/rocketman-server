import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private readonly categoryRepo: Repository<Category>,
  ) {}

  findAll() {
    return this.categoryRepo.find( {
      relations:{shops: true}
    });
  }

  async findOne(id: number) {
    return await this.categoryRepo.findOneBy({ id })
  }

  async create(data: CreateCategoryDto) {
    const category = await this.categoryRepo.create(data)
    this.categoryRepo.save(category)
    return category
  }

  async update(id: number, body: any) {
    await this.categoryRepo.update({ id }, body)
    return await this.categoryRepo.findOneBy({ id })
  }

  async delete(id: number) {
    return await this.categoryRepo.delete({ id })
  }
}
