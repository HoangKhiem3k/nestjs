import { SerializedUser } from './../../interfaces/index';
import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { User } from 'src/users/interfaces';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'khiem le',
      password: 'khiem123',
    },
    {
      username: 'khiem hoang',
      password: 'khiem123',
    },
    {
      username: 'khiem do',
      password: 'khiem123',
    },
    {
      username: 'khiem nguyen',
      password: 'khiem123',
    },
  ];
  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }
  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
