import { IsString, IsNotEmpty } from 'class-validator';

export class UpdatePaymentDto {
  @IsNotEmpty()
  @IsString()
  payment_status: string;
}
