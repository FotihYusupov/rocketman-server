import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client) private readonly clientRepo: Repository<Client>,
  ) {}
  async create(createClientDto: CreateClientDto) {
    const client = this.clientRepo.create(createClientDto);
    this.clientRepo.save(client);
  }

  findAll() {
    return this.clientRepo.find({
      relations: { orders: true },
    });
  }

  async findOne(id: number) {
    return await this.clientRepo.findOneBy({ client_id: id });
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    await this.clientRepo.update({ client_id: id }, updateClientDto);
    return await this.clientRepo.findOneBy({ client_id: id });
  }

  async remove(id: number) {
    return await this.clientRepo.delete({ client_id: id });
  }
}
