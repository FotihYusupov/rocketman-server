import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateShopsDto {
  @IsNotEmpty()
  @IsString()
  shop_name: string;

  @IsNotEmpty()
  shop_telefon: number;

  @IsNotEmpty()
  @IsString()
  shop_adress: string;

  @IsNotEmpty()
  shop_tovar: number;
}
