import { createConnection, Connection } from "typeorm";
import { Book } from "./model/Book";
import { Author } from "./model/Author";

createConnection({
    type: "cordova-sqlite",
    database: "test",
    location: "default",
    entities: [
        Book,
        Author
    ],
    autoSchemaSync: true,
    logging: true
}).then(connection => {
    runTest(connection);
}).catch(error => {
    document.writeln("error: " + JSON.stringify(error));
    console.log(error);
});


function runTest(connection: Connection) {
    let lookingForAlaska = new Book();
    lookingForAlaska.isbn = "0-525-47506-0";
    lookingForAlaska.title = "Looking for Alaska";
    lookingForAlaska.publication_date = new Date(2005, 2, 1);

    let paperTowns = new Book();
    paperTowns.isbn = "978-0-525-47818-8";
    paperTowns.title = "Paper Towns";
    paperTowns.publication_date = new Date(2008, 9, 16);

    let author = new Author();
    author.firstname = "John";
    author.lastname = "Green";

    lookingForAlaska.author = author;
    paperTowns.author = author;

    let authorRepository = connection.getRepository(Author);
    let bookRepository = connection.getRepository(Book);

    authorRepository.save(author).then(() => {
        return bookRepository.save(lookingForAlaska);
    }).then(() => {
        return bookRepository.save(paperTowns);
    }).then(() => {
        return bookRepository.createQueryBuilder("book")
            .innerJoinAndSelect("book.author", "author").getMany();
    }).then((resultSet) => {
        document.writeln(JSON.stringify(resultSet));
    }).catch((reason: any) => {
        document.writeln("error: " + JSON.stringify(reason));
    })
}