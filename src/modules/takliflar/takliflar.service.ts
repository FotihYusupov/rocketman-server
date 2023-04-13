import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-taklif.dto';
import { UpdateCategoryDto } from './dto/update-taklif.dto';
import { Taklif } from './takliflar.entity';

@Injectable()
export class TaklifService {
  constructor(
    @InjectRepository(Taklif) private readonly taklifRepo: Repository<Taklif>,
  ) {}
  findAll() {
    return this.taklifRepo.find();
  }

  async create(data: CreateCategoryDto) {
    const user = this.taklifRepo.create(data)
    await this.taklifRepo.save(user)
    return user
  }

  async update(id: number, body: UpdateCategoryDto) {
    await this.taklifRepo.update({ id }, { taklif_answer: body.taklif_answer });
    return await this.taklifRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.taklifRepo.delete({ id: id });
  }
}
