import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./User";
import { Posting } from "./Posting";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    public id: string;

    @ManyToOne(() => Posting)
    @JoinColumn()
    public posting: Posting;

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