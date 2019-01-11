// const BooksURL = 'https://priceless-mestorf-883378.netlify.com/fe-data-2.json'
// cross origin requests not allowed on the given url
const BooksURL = 'http://www.mocky.io/v2/5c30dff23000006800e77ace'

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
    if (!this.state.books.isLoaded && !this.state.books.isFetching) {
      this.state.books.isFetching = true
      fetch(BooksURL, {mode: 'cors'}).then((response) => {
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
    }
  }
}
