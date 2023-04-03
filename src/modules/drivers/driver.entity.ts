/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'drivers' })
export class User extends BaseEntity {
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
}
