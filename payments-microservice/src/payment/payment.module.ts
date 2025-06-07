import { Module } from '@nestjs/common';
import { PaymentMicroserviceController } from './payment.controller';
import { NatsClientModule } from 'src/nats-client/nats-client.module';

@Module({
  imports: [NatsClientModule],
  controllers: [PaymentMicroserviceController],
})
export class PaymentModule {}
