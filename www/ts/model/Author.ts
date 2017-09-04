import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Book } from './Book'

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @OneToMany(type => Book, book => book.author)
    books: Book[];
}