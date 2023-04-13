/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from '../orders/entities/order.entity';

@Entity({ name: 'drivers' })
export class Driver extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
  })
  driver_name: string;

  @Column({
    type: 'varchar',
    length: '32',
    nullable: false,
  })
  car_number: string;

  @Column({
    type: 'varchar',
    length: 14,
    nullable: false
  })
  driver_telephone: string;

  @Column({
    type: 'varchar',
    nullable: false
  })
  chat_id: string

  @OneToMany(() => Order, (orders) => orders.driver)
  orders: Order[];
}
