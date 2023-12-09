

const myLibrary = [];


function Book(title, author, status){
    // constructor
    this.title = title;
    this.author = author;
    this.status = status;

}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let status = document.getElementById('status').value;


    let newBook = new Book(title, author, status);

    myLibrary.push(newBook);

    console.log("Book added to the library:", newBook);

    document.getElementById('bookForm').reset();

}

