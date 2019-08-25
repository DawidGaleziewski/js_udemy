class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
        const list = document.getElementById('book-list');
        //Create tr element
        const row = document.createElement('tr');
        //Inser cols
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="delete">X</a></td>
        `;
    
        list.appendChild(row);
    }

    showAlert(message, className){
        //Create div
        const div = document.createElement('div');

        //Add classes
        div.className = `alert ${className}`;

        //Add text
        div.appendChild(document.createTextNode(message));

        //Get parent
        const container = document.querySelector('.container');

        const form = document.querySelector('#book-form');

        //Insert alert
            //What to insert?, What to insert before?
        container.insertBefore(div, form);

        //Remove after 5 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000)
    }

    deleteBook(event){
        if(event.target.classList.contains('delete')){
            event.target.parentElement.parentElement.remove()
        }
    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}


//Local storage class
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books
    }

    static displayBooks(){
        const books= Store.getBooks();
        books.forEach(function(book){
            const ui = new UI();
            ui.addBookToList(book);
        })
    }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book)

        localStorage.setItem('books', JSON.stringify(books))
    }

    static removeBook(isbn){
        //Normally we would use ID! but here it is isbn
        const books = Store.getBooks();
        const filteredBooks = books.filter(function(book) {
            return book.isbn !== isbn
        })

        localStorage.setItem('books', JSON.stringify(filteredBooks))

    }
}


//DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks)

//Event Listeners for add book
document.getElementById('book-form').addEventListener('submit', function(e){
    //Get form values
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

    //Instantiate a book object
    const book = new Book(title, author, isbn)

    //Instantiate UI
    const ui = new UI();

    //Validate inputs
    if(title === '' || author === '' || isbn ===''){
        //Error alert
        ui.showAlert('Please fill in all fields', 'error')
    } else {
        //Add book to list
        ui.addBookToList(book)

        //Clear values
        ui.clearFields();

        //Add book to local storage
        Store.addBook(book)

        //Alert book added
        ui.showAlert('Book was added', 'success')
    }


    e.preventDefault();
})


//Event Listener for delete
    //when adding multiple items we need event delegation
document.getElementById('book-list').addEventListener('click', function(e){

    const ui = new UI();
    ui.deleteBook(e);

    //Remove from LS - target isbn
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    

    Store.removeBook(e.target.parentElement.previousSibling)

    ui.showAlert('Book removed!', 'success')

    e.preventDefault();
})


