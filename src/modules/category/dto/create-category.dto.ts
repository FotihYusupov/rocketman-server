import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  category_name: string;

  @IsNotEmpty()
  @IsString()
  category_status: string;

  @IsNotEmpty()
  @IsString()
  category_shops: string;
}
