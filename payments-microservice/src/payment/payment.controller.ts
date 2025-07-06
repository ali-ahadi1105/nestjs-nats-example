import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/createPayment.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentMicroserviceController {
  constructor(
    @Inject('nats_server') private readonly natsClient: ClientProxy,
    private readonly paymentService: PaymentService,
  ) {}

  @EventPattern('createPayment')
  async createPayment(@Payload() createPaymentDto: CreatePaymentDto) {
    const newPayment =
      await this.paymentService.createPayment(createPaymentDto);
    if (newPayment) this.natsClient.emit('paymentCreated', newPayment);
  }
}
