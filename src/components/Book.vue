<template>
  <div id="book">
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
      <p>ISBN {{book.isbn}}</p>
      <p>{{book.description}}</p>
      <router-link
        class="f6 f5 fw4 mt2 black-60 underline"
        :to="{name: 'BookList'}"
        exact>Back to the list</router-link>

      <section v-if="booksByTheSameAuthor.length > 0">
        <h4 class="f5 f4-ns fw3 mb0 black-90">By the same author:</h4>
        <BookListItem v-for="book in booksByTheSameAuthor" v-bind="book" v-bind:key="book.id"/>
      </section>
    </article>
  </div>
</template>

<script>
import { store } from '@/store.js'
import BookListItem from '@/components/BookListItem'
import Loader from '@/components/Loader'
export default {
  name: 'Book',
  data () {
    return { store, book: undefined }
  },
  components: {Loader, BookListItem},
  mounted () {
    store.fetchBooksIfNeeded().then(() => {
      this.setBookById(this.$route.params.id)
      if (this.book === undefined) {
        this.$router.push({ name: 'NotFound' })
      }
    })
  },
  methods: {
    setBookById (id) {
      this.book = this.store.getBookById(id)
    }
  },
  computed: {
    booksByTheSameAuthor () {
      return this.store.getBooksByAuthor(this.book.author).filter(book => book.id !== this.book.id)
    }
  },
  watch: {
    '$route' (to, from) {
      this.setBookById(to.params.id)
    }
  }
}
</script>
