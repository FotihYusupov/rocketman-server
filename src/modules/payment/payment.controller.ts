import { Controller, Get, Body } from '@nestjs/common';
import { Delete, Param, Patch, Post } from '@nestjs/common/decorators';
import { PaymentCreateDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  @Get()
  getAll() {
    return this.paymentService.findAll();
  }

  @Post()
  create(@Body() body: PaymentCreateDto) {
    return this.paymentService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdatePaymentDto) {
    return this.paymentService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentService.remove(+id);
  }
}