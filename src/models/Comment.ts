import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { Posting } from "./Posting";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    public id?: number;

    @ManyToOne(() => Posting, (posting) => posting.comments)
    @JoinColumn()
    public posting: Posting;

    @ManyToOne(() => User, (user) => user.comments)
    @JoinColumn()
    public author: User;

    @CreateDateColumn({
        type: 'timestamp',
        default: ()=>"now()",
    })
    public postDate: Date;

    @Column()
    public content: string;

    @CreateDateColumn({ precision: 0 })
    public createdAt?: Date;

    @UpdateDateColumn({ precision: 0 })
    public updatedAt?: Date;
}