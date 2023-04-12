import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity({ name: 'takliflar' })
export class Taklif extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 15,
    nullable: false
  })
  taklif_owner: string

  @Column({
    type: "varchar",
    length: 10,
    nullable: false
  })
  taklif_data: string

  @Column({
    type: 'text',
    nullable: false,
  })
  taklif_body: string;

  @Column({
    type: 'text',
    default: null
  })
  taklif_answer: string;
}
