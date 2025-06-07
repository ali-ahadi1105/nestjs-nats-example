import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/createPayment.dto';

@Controller('payment')
export class PaymentMicroserviceController {
  constructor(
    @Inject('nats_server') private readonly natsClient: ClientProxy,
  ) {}

  @EventPattern('createPayment')
  createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
    console.log(createPaymentDto);
    this.natsClient.emit('paymentCreated', createPaymentDto);
  }
}
