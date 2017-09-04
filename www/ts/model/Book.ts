import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm'
import { Author } from './Author'

@Entity()
export class Book {
    @PrimaryColumn()
    isbn: string;

    @Column()
    title: string;

    @Column()
    publication_date: Date;

    @ManyToOne(type => Author, author => author.books)
    author: Author;
}