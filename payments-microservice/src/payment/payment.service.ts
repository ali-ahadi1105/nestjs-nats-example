import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './typeorm/entities/payment.entity';
import { Repository } from 'typeorm';
import { CreatePaymentDto } from './dtos/createPayment.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { User } from './typeorm/entities/user.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
    @Inject('nats_server') private natsClient: ClientProxy,
  ) {}

  async createPayment({ userId, ...createPaymentDto }: CreatePaymentDto) {
    const user = await lastValueFrom<User>(
      this.natsClient.send({ cmd: 'getUserById' }, { userId }),
    );
    if (user) {
      const payment = this.paymentRepository.create({
        ...createPaymentDto,
        user,
      });
      return this.paymentRepository.save(payment);
    }
    return null;
  }
}
