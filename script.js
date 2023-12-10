

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

    showBooks();

}

function removeBook(index){
    myLibrary.splice(index, 1);

    showBooks();
}

function showBooks(){
    let tableBody = document.getElementById('bookTableBody');

    tableBody.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];

        let row = tableBody.insertRow();

        let titleCell = row.insertCell(0);
        let authorCell = row.insertCell(1);
        let statusCell = row.insertCell(2);
        let actionCell = row.insertCell(3);


        titleCell.innerHTML = book.title;
        authorCell.innerHTML = book.author;
        statusCell.innerHTML = book.status;

        let removeBtn = document.createElement('button');

        removeBtn.textContent = "Remove";
        removeBtn.onclick = (function(index) {
            return function() {
                removeBook(index);
            };
        })(i);
        actionCell.appendChild(removeBtn);
    }
}