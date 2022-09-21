import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

export class Category {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public list: string

    @Column()
    public color: string
}