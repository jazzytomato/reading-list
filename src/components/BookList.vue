<template>
  <div class="avenir dark-gray pa4 f3 f4-ns fw4">
    <h1>Books</h1>
    <div v-if="store.state.books.isFetching">
      Loading...
    </div>
    <div v-if="store.state.books.isError">
      Error while fetching book data.
    </div>
    <div v-if="store.state.books.isLoaded">
      <ul class="pl0 list flex flex-column items-start">
        <BookListItem v-for="book in store.state.books.data" v-bind="book" v-bind:key="book.id"/>
      </ul>
    </div>
  </div>
</template>

<script>
import { store } from '@/store.js'
import BookListItem from '@/components/BookListItem'

export default {
  name: 'BookList',
  data () {
    return { store }
  },
  mounted: () => {
    store.fetchBooksIfNeeded()
  },
  components: {BookListItem}
}
</script>
