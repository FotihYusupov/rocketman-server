/* eslint-disable prettier/prettier */
import { IsString, IsEnum, IsNotEmpty } from 'class-validator';

enum UserRole {
  ADMIN = "admin",
  SUPER_ADMIN = "superAdmin"
}

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  user_name: string;

  @IsNotEmpty()
  @IsString()
  admin_password: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(UserRole)
  user_role: UserRole;
}