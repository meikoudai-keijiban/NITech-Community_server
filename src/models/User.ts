import { Entity, PrimaryColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Comment } from "./Comment"
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
    postings?: Posting[]

    @OneToMany(() => Comment, (comment) => comment.author)
    comments?: Comment[]

    @CreateDateColumn({ precision: 0 })
    public createdAt?: Date;

    @UpdateDateColumn({ precision: 0 })
    public updatedAt?: Date;
}