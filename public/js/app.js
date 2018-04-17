const Book = function (title, author, category, genre) {
  this.title = title;
  this.author = author;
  this.category = category;
  this.genre = genre;
}


const handleFormSubmit = function (event) {
  event.preventDefault();
  const title = this.title.value;
  if (title === "") {
    const error = document.querySelector('#error-message');
    error.textContent = 'Title cannot be empty';
    return
  }
  const author = this.author.value;
  if (author === "") {
    const error = document.querySelector('#error-message');
    error.textContent = 'Author cannot be empty';
    return
  }
  // const form = document.querySelector('#book-form')
  // let data = new FormData(form);
  // data = Array.from(data);
  // const category = data[0][1];
  const category = this.category.value;

  const genre = this.genre.value;

  const newBook = new Book(title, author, category, genre)
  const parent = document.querySelector('#book-list');
  appendBook(newBook, parent);
  document.getElementById('book-form').reset();

}

  const appendBook = function (book, parent) {
    const bookContainer = document.createElement ('ul');
    const bookTitle = document.createElement ('li');
    bookTitle.textContent = `Title : ${book.title}`;
    bookContainer.appendChild(bookTitle);

    const bookAuthor = document.createElement ('li');
    bookAuthor.textContent = `Author : ${book.author}`;
    bookContainer.appendChild(bookAuthor);

    const bookCategory = document.createElement ('li');
    bookCategory.textContent = `Category : ${book.category}`;
    bookContainer.appendChild(bookCategory);

    const bookGenre = document.createElement ('li');
    bookGenre.textContent = `Genre : ${book.genre}`;
    bookContainer.appendChild(bookGenre);

    parent.appendChild(bookContainer);
  }


document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#book-form')
  form.addEventListener('submit', handleFormSubmit);
});
