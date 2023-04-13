import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Shops } from '../shops/shops.entity';

enum Status {
  On = 'on',
  Off = 'off',
}

@Entity({ name: 'category' })
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
  })
  category_name: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.On,
  })
  category_status: string;

  @Column({
    type: 'smallint',
    nullable: false,
  })
  category_shops: number;

  @OneToMany(() => Shops, (shops) => shops.categorys)
  shops: Shops[];
}
