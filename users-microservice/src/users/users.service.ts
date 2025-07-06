import { Injectable } from '@nestjs/common';
import { User } from './typeorm/entities/User';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateuserDto } from './dtos/createUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(data: CreateuserDto) {
    const newUser = this.userRepository.create(data);
    return await this.userRepository.save(newUser);
  }

  getUserById(userId: string) {
    return this.userRepository.findOne({
      where: { id: userId },
      relations: ['payments'],
    });
  }
}
