import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../product/product.entity';

enum Status {
  Enabled = "enabled",
  Disabled = "desabled"
}

@Entity({ name: 'product_type' })
export class ProductType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
  })
  product_type_name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  product_type_info: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  product_type_price: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.Enabled,
  })
  product_status: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  product_type_img: string;

  @ManyToOne(() => Product, (product) => product.product_type)
  product: Product[]
}
