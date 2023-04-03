/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum UserRole {
  ADMIN = "admin",
  SUPER_ADMIN = "superAdmin"
}

@Entity({ name: 'admins' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
  })
  user_name: string;

  @Column({
    type: 'varchar',
    length: '64',
    nullable: false,
  })
  admin_password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.ADMIN
  })
  user_role: string;
}
