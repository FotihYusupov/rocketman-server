import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  taklif_owner: string;

  @IsNotEmpty()
  @IsString()
  taklif_data: string;

  @IsNotEmpty()
  @IsString()
  taklif_body: string;

  @IsNotEmpty()
  @IsString()
  taklif_answer: string;

  @IsNotEmpty()
  userId: number;
}
