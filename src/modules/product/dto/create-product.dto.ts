import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  product_name: string;

  @IsNotEmpty()
  product_turi: number;

  @IsNotEmpty()
  @IsString()
  product_status: string;
}
