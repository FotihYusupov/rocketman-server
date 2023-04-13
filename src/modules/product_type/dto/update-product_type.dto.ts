import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateProductTypeDto {
  @IsNotEmpty()
  @IsString()
  product_type_name: string;

  @IsNotEmpty()
  @IsString()
  product_type_info: string;

  @IsNotEmpty()
  @IsString()
  product_type_price: string;

  @IsNotEmpty()
  @IsString()
  product_status: string;

  @IsNotEmpty()
  @IsString()
  product_type_img: string;
}
