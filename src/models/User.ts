import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn()
    public id: string;

    // @Column({
    //     unique:true
    // })
    // public nitechUserId: string;

    @Column()
    public name: string;

    @Column()
    public department: string;
}