import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateClientDto {
  @IsNotEmpty()
  @IsString()
  client_name: string;


  @IsNotEmpty()
  @IsString()
  client_telephone: string;
}
