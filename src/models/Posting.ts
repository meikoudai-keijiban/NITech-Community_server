import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn, OneToMany } from "typeorm";
import { User } from "./User";
import { Comment } from "./Comment";

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

    @OneToMany(() => Comment, (comment) => comment.author)
    comments: Comment[]
}