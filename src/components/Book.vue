<template>
  <div>
    <div v-if="!book">
      <div class="flex flex-column justify-center items-center">
        <Loader/>
      </div>
    </div>
    <article v-if="book" class="mw5 mw6-ns center pt4">
      <div class="aspect-ratio aspect-ratio--1x1 mb4">
        <div
          class="aspect-ratio--object cover"
          :style='{ backgroundImage: `url(${book.cover})` }'></div>
      </div>
      <h3 class="f5 f4-ns fw3 mb0 black-90">{{book.title}}</h3>
      <h3 class="f6 f5 fw4 mt2 black-60">{{book.author}}</h3>
      <router-link
        class="f6 f5 fw4 mt2 black-60 underline"
        :to="{name: 'BookList'}"
        exact>Back to the list</router-link>
    </article>
  </div>
</template>

<script>
import { store } from '@/store.js'
import Loader from '@/components/Loader'
export default {
  name: 'Book',
  data () {
    return { store, book: undefined }
  },
  components: {Loader},
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
