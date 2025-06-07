import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateuserDto } from './dtos/createUser.dto';
@Controller()
export class UsersMicroserviceController {
  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateuserDto) {
    return { msg: 'success' };
  }
  @EventPattern('paymentCreated')
  createPayment(@Payload() data: any) {
    console.log(data);
  }
}
