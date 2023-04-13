import { IsNotEmpty, IsString } from 'class-validator';

export enum OrderStatus {
  BUYURTMA = 'buyurtma',
  QABUL = 'qabul',
  YETKAZISH = 'yetkazish',
  YAKUN = 'yakun',
  BEKOR = 'bekor',
}
export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  count: number;

  @IsNotEmpty()
  @IsString()
  total_price: string;

  @IsNotEmpty()
  @IsString()
  long: string;

  @IsNotEmpty()
  @IsString()
  lang: string;

  @IsNotEmpty()
  @IsString()
  order_status: OrderStatus;
}
