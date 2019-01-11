// const BooksURL = 'https://priceless-mestorf-883378.netlify.com/fe-data-2.json'
// cross origin requests not allowed on the given url
export const BooksURL = 'https://www.mocky.io/v2/5c30dff23000006800e77ace'

export const store = {
  state: {
    books: {
      isLoaded: false,
      isFetching: false,
      isError: false,
      data: []
    }
  },
  fetchBooksIfNeeded () {
    if (this.state.books.isLoaded || this.state.books.isFetching) {
      return Promise.resolve()
    }
    this.state.books.isFetching = true
    return fetch(BooksURL, {mode: 'cors'}).then((response) => {
      return response.json()
    }).then((data) => {
      this.state.books = {
        isFetching: false,
        isLoaded: true,
        isError: false,
        data: data.books
      }
      this.state.error = false
    }).catch((error) => {
      console.error(error)
      this.state.books.isError = true
    })
  },
  getBookById (id) {
    return this.state.books.data.find((book) => book.id === id)
  },
  getBooksByAuthor (author) {
    return this.state.books.data.filter((book) => book.author === author)
  }
}
