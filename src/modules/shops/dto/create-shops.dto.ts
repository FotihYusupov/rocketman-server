import { IsString, IsNotEmpty } from 'class-validator';

export class CreateShopsDto {
  @IsNotEmpty()
  @IsString()
  shop_name: string;

  @IsNotEmpty()
  shop_telefon: number;

  @IsNotEmpty()
  @IsString()
  shop_adress: string;

  @IsNotEmpty()
  @IsString()
  shop_status: string;

  @IsNotEmpty()
  shop_tovar: number;
}
