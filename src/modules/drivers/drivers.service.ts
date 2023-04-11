import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './driver.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver) private readonly driversRepo: Repository<Driver>,
  ) {}
  async create(createDriverDto: CreateDriverDto) {
    const driver = await this.driversRepo.create(createDriverDto);
    return this.driversRepo.save(driver);
  }

  findAll() {
    return this.driversRepo.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} driver`;
  // }

  // update(id: number, updateDriverDto: UpdateDriverDto) {
  //   return `This action updates a #${id} driver`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} driver`;
  // }
}
