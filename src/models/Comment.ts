import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

import { Posting } from "./Posting";
import { User } from "./User";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    public id: number;

    @OneToOne(type => Posting)
    @JoinColumn()
    public posting: Posting;

    @Column({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
      })
    public date: string;

    @Column()
    public title: string;

    @Column()
    public cotent: string;

    @OneToOne(type => User)
    @JoinColumn()
    public author: User;

    @Column({
        type: "simple-array",
    })
    public good: string[];

    @Column({
        default: false,
    })
    public ishHidden: boolean
}