import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-use.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [{ id: 0, name: 'Buck' }];

  findAll() {
    return this.users;
  }

  findById(userId: number) {
    return this.users.find((user) => user.id == userId);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
