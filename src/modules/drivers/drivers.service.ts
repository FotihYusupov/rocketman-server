import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './driver.entity';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver) private readonly DriverRepo: Repository<Driver>,
  ) {}

  async create(data: CreateDriverDto) {
    const driver = this.DriverRepo.create(data);
    await this.DriverRepo.save(driver);
    return driver;
  }

  findAll() {
    return this.DriverRepo.find({
      relations: { orders: true },
    });
  }

  async findOne(id: number) {
    return await this.DriverRepo.findOneBy({ id });
  }

  async update(id: number, body: UpdateDriverDto) {
    await this.DriverRepo.update({ id }, body);
    return await this.DriverRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.DriverRepo.delete({ id: id });
  }
}
