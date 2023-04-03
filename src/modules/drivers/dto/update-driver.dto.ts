import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateDriverDto {
  @IsNotEmpty()
  @IsString()
  driver_name: string;

  @IsNotEmpty()
  @IsString()
  car_number: string;

  @IsNotEmpty()
  @IsString()
  driver_telephone: string;

  @IsNotEmpty()
  @IsString()
  chat_id: string;
}
