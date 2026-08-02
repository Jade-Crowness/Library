const addBtn = document.querySelector('#addBtn');
const bookForm = document.querySelector('#book-form');
const submitBtn = document.querySelector('#submit-button');
const temp = document.querySelector('#temp');

// Book Details
const bookName = document.querySelector('#book-name');
const name = document.querySelector('.name')

const author = document.querySelector('#author');
const authorName = document.querySelector('.author-name');

const publication = document.querySelector('#publication');
const status = document.querySelector('#status');

// Code

const library = [];

function loop() {
    temp.textContent = '';
    for (let x of library) {
        const div = document.createElement('div');
        const name = document.createElement('div');
        const authorName = document.createElement('div');

        name.classList.add('.name');
        authorName.classList.add('.author-name');

        div.appendChild(name);
        div.appendChild(authorName);

        temp.appendChild(div);
        name.textContent = x.bookName;
        authorName.textContent = x.author;
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
}

submitBtn.addEventListener('click', (event) => {
    addBook();
    loop();
    clear();
    bookForm.style.display = 'none';
});