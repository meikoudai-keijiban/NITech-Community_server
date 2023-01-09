import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Posting } from "./Posting";

@Entity()
export class User {
    @PrimaryColumn()
    public id?: string;

    // @Column({
    //     unique:true
    // })
    // public nitechUserId: string;

    @Column()
    public name: string;

    @Column()
    public department: string;

    @OneToMany(() => Posting, (posting) => posting.author)
    Postings: Posting[]
}