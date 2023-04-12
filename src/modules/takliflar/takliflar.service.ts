import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-taklif.dto';
import { UpdateCategoryDto } from './dto/update-taklif.dto';
import { Taklif } from './takliflar.entity';

@Injectable()
export class TaklifService {
  constructor(
    @InjectRepository(Taklif) private readonly userRepo: Repository<Taklif>,
  ) {}
  findAll() {
    return this.userRepo.find();
  }

  async create(data: CreateCategoryDto) {
    const user = this.userRepo.create(data)
    await this.userRepo.save(user)
    return user
  }

  
}
