/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'amdinsss' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  admin_id: number;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false
  })
  admin_name: string;

  @Column({
    type: 'varchar',
    length: '64',
    nullable: false
  })
  admin_password: string;

  @Column({
    type: 'enum',
    nullable: false
  })
  admin_role: 'SuperAdmin' | 'Admin'
}