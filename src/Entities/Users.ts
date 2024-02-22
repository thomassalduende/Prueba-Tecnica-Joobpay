import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, } from "typeorm";

@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255, unique: true, nullable: false })
    email: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    name: string;

    @Column({ type: "varchar", length: 255, nullable: false })
    phone: string;

    @Column({ type: "text", nullable: false })
    address: string;

    @Column({ type: "varchar", length: 120, nullable: false })
    password: string;
}
