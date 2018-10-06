import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from "typeorm";
import {Post} from "./Post";

@Entity("Author")
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    birthdate: Date;

    @OneToMany(type => Post, post => post.author)
    posts: Post[];
}