/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('admins')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.findAll();
  }
}