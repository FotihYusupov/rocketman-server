import { IsString } from 'class-validator';

export class UpdateShopsDto {
  @IsString()
  shop_name: string;

  shop_telefon: number;

  @IsString()
  shop_adress: string;

  shop_tovar: number;
}
