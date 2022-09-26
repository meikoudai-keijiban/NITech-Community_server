import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public list: string

    @Column()
    public color: string
}