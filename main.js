// Query Selectors

const dialog = document.querySelector('dialog');
const submitBtn = document.querySelector('#submitBtn');
const book_name = document.querySelector('#book_name');
const author_name = document.querySelector('#author_name');
const publication_year = document.querySelector('#publication_year');
const current_status = document.querySelector('#current_status');
const main = document.querySelector('#main-content');
const form = document.querySelector("form");
const closeBtn = document.querySelector("#close_btn")

// Main Code

let library = [];

function Book(name, author, year, haveRead, id) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.haveRead = haveRead;
    this.id = id;

}

Book.prototype.toggle = function() {
    switch (this.haveRead) {
        case "Plan To Read" :
            this.haveRead = "Reading";
            break;
        case "Reading" :
            this.haveRead = "Completed";
            break;
        case "Completed" :
            this.haveRead = "Reading";
            break;
    };
};

function addBookToLibrary(bookName, authorName, PublicationDate, currentStatus, uniqueID) {
    
    const book = new Book(bookName, authorName, PublicationDate, currentStatus, uniqueID);
    library.push(book);
    dialog.close();
    form.reset();
}

function displayBook() {
    main.textContent = "";
    if (library.length > 0) {
        for (let x of library) {
            // Creating Cards of Library
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("library-card");
            // Creating Content Divs of Library
            const nameOfBookDiv = document.createElement("div");
            const authorOfBookDiv = document.createElement("div");
            const yearOfBookDiv = document.createElement("div");
            const statusOfBookDiv = document.createElement("div");

            const buttonContainerDiv = document.createElement("div");
            buttonContainerDiv.classList.add("card_buttons");

            const deleteBtn = document.createElement("button");
            const toggleStatusBtn = document.createElement("button");

            deleteBtn.classList.add('delete_button');
            // Contents of Library
            const nameOfBook = document.createTextNode(`Name : ${x.name}`);
            const authorOfBook = document.createTextNode(`Author : ${x.author}`);
            const yearOfBook = document.createTextNode(`Publication : ${x.year}`);
            const statusOfBook = document.createTextNode(`Reading Status : ${x.haveRead}`);
            cardDiv.dataset.idData = `${x.id}`;
            deleteBtn.textContent = 'Delete';
            toggleStatusBtn.textContent = 'Toggle Status'
            // Appending Texts to Content Divs
            nameOfBookDiv.appendChild(nameOfBook)
            authorOfBookDiv.appendChild(authorOfBook)
            yearOfBookDiv.appendChild(yearOfBook)
            statusOfBookDiv.appendChild(statusOfBook)
            // Appending The Contents
            buttonContainerDiv.appendChild(deleteBtn);
            buttonContainerDiv.appendChild(toggleStatusBtn);

            cardDiv.appendChild(nameOfBookDiv);
            cardDiv.appendChild(authorOfBookDiv);
            cardDiv.appendChild(yearOfBookDiv);
            cardDiv.appendChild(statusOfBookDiv);
            cardDiv.appendChild(buttonContainerDiv);
            main.appendChild(cardDiv)

            deleteBtn.addEventListener('click', function(e) {
                for (let x of library) {
                    if (`${x.id}` == cardDiv.dataset.idData) {
                        library = library.filter(elm => elm !== x);
                    }
                }
                displayBook();
            })
            toggleStatusBtn.addEventListener('click', function(e) {
                for (let x of library) {
                    if (`${x.id}` == cardDiv.dataset.idData) {
                        x.toggle();
                    }
                }
                displayBook();
            })
        }
    }
}

submitBtn.addEventListener('click', function(e) {
    addBookToLibrary(book_name.value, author_name.value, publication_year.value, current_status.value, self.crypto.randomUUID());
    displayBook();
    e.preventDefault();
});

closeBtn.addEventListener('click', function(e) {
    dialog.close();
    form.reset();
})