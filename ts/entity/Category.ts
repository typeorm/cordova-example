import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("Category")
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}