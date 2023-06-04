import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Comment } from "./Comment";
import { User } from "./User";

@Entity()
export class Posting {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public title: string;

    @ManyToOne(() => User, (user) => user.postings)
    @JoinColumn()
    public author: User;

    @CreateDateColumn({
        type: 'timestamp',
        default: ()=>"now()",
    })
    public postDate: Date;

    @Column()
    public content: string;

    @OneToMany(() => Comment, (comment) => comment.posting)
    comments?: Comment[]

    @CreateDateColumn({ precision: 0 })
    public createdAt?: Date;

    @UpdateDateColumn({ precision: 0 })
    public updatedAt?: Date;
}