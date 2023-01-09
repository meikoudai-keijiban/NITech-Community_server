import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Posting {
    @PrimaryGeneratedColumn()
    public id?: string;

    @Column()
    public title: string;

    @ManyToOne(() => User)
    @JoinColumn()
    public author: User;

    @CreateDateColumn({
        type: 'timestamp',
        default: ()=>"now()",
    })
    public postDate: Date;

    @Column()
    public content: string;
}