import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('float')
  amount: number;
  @ManyToOne(() => User, (user) => user.payments)
  user: User;
}
