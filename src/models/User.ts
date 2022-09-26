import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from "typeorm";

import { Posting } from "./Posting";
import { Comment } from "./Comment";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public pwd: string;

  @Column()
  public profile: string;

  @Column({
    default: "/images/user_page.png",
  })
  public icon: string;

  @Column()
  public pub: number;

  @OneToMany(() => Posting, posting => posting.author)
  public myPostings: Posting[];

  @OneToMany(() => Comment, comment => comment.author)
  public myComments: Comment[];

  @ManyToMany(() => Posting)
  @JoinTable()
  public favPostings: Posting[];

  @ManyToMany(() => Comment)
  @JoinTable()
  public goodComments: Comment[];

  @Column({
    type: "simple-array",
  })
  public sketch: string[];

  @Column({
    default: "",
  })
  public postingToken: string;

  @Column({
    default: ""
  })
  public commentToken: string;

  @Column({
    default: 0,
  })
  public error: number;

  @Column({
    default: false
  })
  public isHidden: boolean;

  @Column({
    default: false
  })
  public isInactivated: boolean;
}
