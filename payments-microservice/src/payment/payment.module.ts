import { Module } from '@nestjs/common';
import { PaymentMicroserviceController } from './payment.controller';

@Module({
  controllers: [PaymentMicroserviceController],
})
export class PaymentModule {}
