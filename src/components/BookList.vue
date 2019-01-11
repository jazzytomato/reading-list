<template>
  <div class="avenir pa2-ns f3 f4-ns fw3">
    <header class="tc ph4">
      <h1 class="fw2 black-90 mv3">Reading list</h1>
    </header>
    <div v-if="store.state.books.isFetching">
      Loading...
    </div>
    <div v-if="store.state.books.isError">
      Error while fetching book data.
    </div>
    <div v-if="store.state.books.isLoaded">
      <section class="cf w-100">
        <BookListItem v-for="book in store.state.books.data" v-bind="book" v-bind:key="book.id"/>
      </section>
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
