let myLibrary = [["Book 1", "Author", "295", "Read"], ["Book 2", "Author", "295", "Read"], ["Book 3", "Author", "295", "Read"]];

//Add book popup
const addBookButton = document.querySelector(['.add-book-button']);
const popup = document.querySelector('#popup');
addBookButton.addEventListener('click', () => {
    popup.className = '';
})

//Creating the cards
const container = document.querySelector('#container');
myLibrary.forEach(buildACard);

function buildACard(currentValue, index) {
    let card = container.appendChild(document.createElement('div'));
    card.id = index;
    card.className = "book";

    let bookTitle = card.appendChild(document.createElement('p'));
    bookTitle.innerHTML = "Title: " + currentValue[0];

    let author = card.appendChild(document.createElement('p'));
    author.innerHTML = "Author: " + currentValue[1];

    let numPages = card.appendChild(document.createElement('p'));
    numPages.innerHTML = "Pages: " + currentValue[2];

    let read = card.appendChild(document.createElement('button'));
    read.innerHTML = currentValue[3];
    read.addEventListener('click', () => {
        if (read.innerHTML == 'Read') {
            read.innerHTML = "Unread";
            myLibrary[index][3] = "Unread";
            console.log('yeah buddy');
        } else {
            read.innerHTML = "Read";
            myLibrary[index][3] = 'Read';    
        }
    });

    let del = card.appendChild(document.createElement('button'));
    del.innerHTML = 'Delete';
    del.className = 'del';
    del.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        console.log(index);
        card.remove();
    })

    console.log('were in')
};

//pull new book form
const newBookSubmit = document.querySelector(['#new-book-submit']);
newBookSubmit.addEventListener('click', () => {
    let bookTitle = document.querySelector(['#book-title']).value;
    let authorName = document.querySelector(['#author-name']).value;
    let numberOfPages = document.querySelector(['#number-of-pages']).value;
    let readStatus = document.querySelector(['input[name="read"]:checked']).value;

    console.log(readStatus);
    let array = addNewBook(bookTitle, authorName, numberOfPages, readStatus);
    buildACard(array, array.length - 1);
});
 
function addNewBook(title, author, numberOfPages, readStatus) {
    let array = [title, author, numberOfPages, readStatus];
    myLibrary.push(array);
    console.log(myLibrary);
    return array;
};