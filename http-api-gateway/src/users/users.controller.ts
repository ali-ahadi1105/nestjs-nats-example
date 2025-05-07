import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateuserDto } from './dto/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('nats_server') private readonly natsClient: ClientProxy,
  ) {}

  @Post()
  createUser(@Body() createUserDto: CreateuserDto) {
    console.log(createUserDto);
  }
}
