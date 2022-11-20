import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn()
    public id: string;

    @Column()
    public nitechUserId: string;

    // @Column()
    // public name: string;
}