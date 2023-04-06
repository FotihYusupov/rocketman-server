import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
    type: 'varchar',
    length: '5',
    nullable: false,
  })
  category_status: string;

  @Column({
    type: 'smallint',
    nullable: false,
  })
  category_shops: string;
}
