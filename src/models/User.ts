import { Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn()
  public id: string;

  @CreateDateColumn({ precision: 0 })
  public createdAt?: Date;

  @UpdateDateColumn({ precision: 0 })
  public updatedAt?: Date;

  @Column()
  public nitechUserId: string;
}
