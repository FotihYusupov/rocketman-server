import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum PaymentStatus {
    Enabled = "Ishlavoti",
    Disabled = "Ishlamayapti"
}

@Entity({name: "payments"})
export class Payment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({
        type: 'varchar',
        length: 15,
        nullable: false
    })
    payment_name: string
    
    @Column({
        type: "text",
        nullable: false
    })
    payment_link: string
    
    @Column({
        type: 'enum',
        enum: PaymentStatus,
        default: PaymentStatus.Disabled
    })
    payment_status: string;
}