import { Controller } from '@nestjs/common';

@Controller('user')
export class UserController {}

  @Get()
  getAll() {
    return this.userService.findAll();
  }
}