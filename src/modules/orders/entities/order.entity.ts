import { Driver } from '../../drivers/driver.entity';
import { Client } from '../../clients/entities/client.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum OrderStatus {
  BUYURTMA = 'buyurtma',
  QABUL = 'qabul',
  YETKAZISH = 'yetkazish',
  YAKUN = 'yakun',
  BEKOR = 'bekor',
}

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column({ type: 'int', nullable: false })
  count: number;

  @Column({ type: 'text', nullable: false })
  total_price: string;

  @Column({ type: 'text', nullable: false })
  long: string;

  @Column({ type: 'text', nullable: false })
  lang: string;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.BUYURTMA })
  order_status: OrderStatus;

  @ManyToOne(() => Client, (clients) => clients.orders)
  client: Client[];

  @ManyToOne(() => Driver, (driver) => driver.orders)
  driver: Driver[];
}
