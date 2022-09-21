import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

import { User } from "./User";
import { Category } from "./Category";

@Entity()
export class Posting {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public author: User;

  @Column()
  public category: Category;

  @Column()
  public date: Date;

  @Column()
  public content: string;

  @Column()
  public comments: Comment[];

  @Column()
  public favorite: number;

  @Column()
  public accesslog: string[];

  @Column()
  public popular: number;

  @Column()
  public hidden: boolean;

}