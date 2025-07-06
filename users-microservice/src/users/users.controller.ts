import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateuserDto } from './dtos/createUser.dto';
import { UsersService } from './users.service';
@Controller()
export class UsersMicroserviceController {
  constructor(private readonly userService: UsersService) {}
  @MessagePattern({ cmd: 'createUser' })
  async createUser(@Payload() data: CreateuserDto) {
    return await this.userService.createUser(data);
  }

  @MessagePattern({ cmd: 'getUserById' })
  getUserById(@Payload() data) {
    const { userId } = data;
    return this.userService.getUserById(userId);
  }

  @EventPattern('paymentCreated')
  createPayment(@Payload() data: any) {
    console.log(data);
  }
}
