import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/createPayment.dto';

@Controller('payment')
export class PaymentController {
  constructor(
    @Inject('nats_server') private readonly natsClient: ClientProxy,
  ) {}

  @Post()
  createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    this.natsClient.emit('createPayment', createPaymentDto);
  }
}
