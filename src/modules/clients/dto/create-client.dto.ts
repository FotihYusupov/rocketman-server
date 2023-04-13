import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @IsNotEmpty()
  @IsString()
  client_name: string;

  @IsNotEmpty()
  @IsString()
  client_telephone: string;
}
