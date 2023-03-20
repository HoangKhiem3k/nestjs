import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { SerializedUser } from 'src/users/interfaces';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UsersService,
  ) {}
  // Get all users
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  // Get user by username
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  getUserByUsername(@Param('username') username: string) {
    const user = this.userService.getUserByUsername(username);
    if (user) {
      return new SerializedUser(user);
    } else {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
  }
}
