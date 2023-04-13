import { IsString } from 'class-validator';

export class UpdateDriverDto {
  @IsString()
  driver_name: string;

  @IsString()
  car_number: string;

  @IsString()
  driver_telephone: string;

  @IsString()
  chat_id: string;
}
