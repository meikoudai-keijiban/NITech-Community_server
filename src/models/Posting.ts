import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";

import { User } from "./User";
import { Category } from "./Category";
import { Comment } from "./Comment";

@Entity()
export class Posting {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @OneToOne(type => User)
  @JoinColumn()
  public author: User;

  @OneToOne(type => Category)
  @JoinColumn()
  public category: Category;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  public date: string;

  @Column()
  public content: string;

  @Column({
    type: "simple-array",
  })
  public comments: Comment[];

  @Column()
  public favorite: number;

  @Column({
    type: "simple-array",
  })
  public accesslog: string[];

  @Column()
  public popular: number;

  @Column()
  public isHidden: boolean;

}