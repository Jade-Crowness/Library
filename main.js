const addBtn = document.querySelector('#addBtn');
const bookForm = document.querySelector('#book-form');
const submitBtn = document.querySelector('#submit-button');
const temp = document.querySelector('#temp');

const bookName = document.querySelector('#book-name');
const author = document.querySelector('#author');
const publication = document.querySelector('#publication');
const status = document.querySelector('#status');

const library = [];

function loop() {
    for (let i = 0; i < library.length; i++) {
        const div = document.createElement('div');
        temp.appendChild(div);
    }
}

const clear = function() {
    bookName.value = "";
    author.value = "";
    publication.value = 0;
}

addBtn.addEventListener('click', (event) => {
    bookForm.style.display = 'block';
});

function Book(bookName, author, publication, status) {
    this.bookName = bookName;
    this.author = author;
    this.publication = publication;
    this.status = status;
}

function addBook() {
    const book = new Book(bookName.value, author.value, publication.value, status.value);
    library.push(book);
    const bookGrid = document.createElement('div');
    temp.appendChild(bookGrid);
}

submitBtn.addEventListener('click', (event) => {
    addBook();
    console.log(library);
    clear();
    bookForm.style.display = 'none';
});