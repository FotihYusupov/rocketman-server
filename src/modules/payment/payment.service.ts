import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentCreateDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment) private readonly paymentRepo: Repository<Payment>,
  ) {}
  findAll() {
    return this.paymentRepo.find();
  }

  async create(data: PaymentCreateDto) {
    const user = this.paymentRepo.create(data)
    await this.paymentRepo.save(user)
    return user
  }

  async update(id: number, body: UpdatePaymentDto) {
    await this.paymentRepo.update({ id }, { payment_status: body.payment_status });
    return await this.paymentRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.paymentRepo.delete({ id: id });
  }
}