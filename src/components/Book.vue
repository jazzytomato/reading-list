<template>
  <div v-if="book" class="">
    {{ book.title }}
  </div>
</template>

<script>
import { store } from '@/store.js'
export default {
  name: 'Book',
  data () {
    return { store, book: undefined }
  },
  mounted () {
    store.fetchBooksIfNeeded().then(() => {
      this.getBookFromStore(this.$route.params.id)
    })
  },
  methods: {
    getBookFromStore (id) {
      this.book = this.store.state.books.data.find((book) => book.id === id)
      if (this.book === undefined) {
        this.$router.push({ name: 'NotFound' })
      }
    }
  }
}
</script>
