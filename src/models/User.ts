import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Posting } from "./Posting";
import { Comment } from "./Comment"

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
}