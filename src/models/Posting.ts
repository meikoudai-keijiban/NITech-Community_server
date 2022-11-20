import { Entity, PrimaryColumn, Column, JoinColumn, OneToOne, CreateDateColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Posting {
    @PrimaryColumn()
    public id: string;

    @Column()
    public title: string;

    @OneToOne(() => User)
    @JoinColumn()
    public author: User;

    @CreateDateColumn()
    public postDate: Date;

    @Column()
    public content: string;
}