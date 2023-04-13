import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../category/category.entity';
import { Product } from '../product/product.entity';

enum Status {
  Enabled = "enabled",
  Disabled = "desabled"
}

@Entity({ name: 'shops' })
export class Shops extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 32,
    nullable: false,
  })
  shop_name: string;

  @Column({
    type: 'varchar',
    length: 14,
    nullable: false,
  })
  shop_telefon: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  shop_adress: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.Enabled,
  })
  shop_status: string;

  @Column({
    type: 'smallint',
    nullable: false,
  })
  shop_tovar: number;

  @ManyToOne(() => Category, (categorys) => categorys.shops)
  categorys: Category[]

  @OneToMany(() => Product, (product) => product.shops)
  product: Product[]
}
