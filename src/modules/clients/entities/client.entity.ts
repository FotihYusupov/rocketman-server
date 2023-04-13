import { Order } from '../../orders/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clients' })
export class Client {
  @PrimaryGeneratedColumn()
  client_id: number;

  @Column({ type: 'varchar', length: '64', nullable: false })
  client_name: string;

  @Column({ type: 'varchar', length: '13', nullable: false })
  client_telephone: string;

  @OneToMany(() => Order, (orders) => orders.client)
  orders: Order[];
}
