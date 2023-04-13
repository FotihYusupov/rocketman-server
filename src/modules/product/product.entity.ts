import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Shops } from '../shops/shops.entity';
import { ProductType } from '../product_type/product_type.entity';

enum Status {
  Enabled = "enabled",
  Disabled = "desabled"
}

@Entity({ name: 'product' })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
  })
  product_name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  product_turi: number;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.Enabled,
  })
  product_status: string;

  @ManyToOne(() => Shops, (shops) => shops.product)
  shops: Shops[]

  @OneToMany(() => ProductType, (product_type) => product_type.product)
  product_type: ProductType[]
}
