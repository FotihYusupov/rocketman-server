/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}
  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: number) {
    return await this.userRepo.findOneBy({ id })
  }

  async create(data: CreateUserDto) {
    const user = this.userRepo.create(data)
    await this.userRepo.save(user)
    return user
  }

  async update(data: UpdateUserDto) {
    return this.userRepo.update(data)
  }
}
