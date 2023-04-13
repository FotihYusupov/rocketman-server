import { IsString, IsNotEmpty } from 'class-validator';

export class PaymentCreateDto {
  @IsNotEmpty()
  @IsString()
  payment_name: string;

  @IsNotEmpty()
  @IsString()
  payment_link: string;

  @IsNotEmpty()
  @IsString()
  payment_status: string;
}
