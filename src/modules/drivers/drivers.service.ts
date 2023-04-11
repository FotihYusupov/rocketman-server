import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './driver.entity';
// import { CreateDriverDto } from './dto/create-driver.dto';
// import { UpdateDriverDto } from './dto/update-driver.dto';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver) private readonly driverRepo: Repository<Driver>,
  ) {}
  findAll() {
    return this.driverRepo.find();
  }

  // create(createDriverDto: CreateDriverDto) {
  //   return 'This action adds a new driver';
  // }

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
