import {
  Body,
  Controller,
  Get,
  HttpException,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateuserDto } from './dto/createUser.dto';
import { lastValueFrom } from 'rxjs';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('nats_server') private readonly natsClient: ClientProxy,
  ) {}

  @Post()
  createUser(@Body() createUserDto: CreateuserDto) {
    return this.natsClient.send({ cmd: 'createUser' }, createUserDto);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await lastValueFrom(
      this.natsClient.send({ cmd: 'getUserById' }, { userId: id }),
    );
    if (user) return user;
    throw new HttpException('User not found', 404);
  }
}
