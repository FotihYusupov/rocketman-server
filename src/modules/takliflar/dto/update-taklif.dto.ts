import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateCategoryDto {
  @IsNotEmpty()
  @IsString()
  taklif_answer: string;
}