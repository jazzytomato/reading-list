import Vue from 'vue'
import Router from 'vue-router'
import BookList from '@/components/BookList'
import Book from '@/components/Book'

Vue.use(Router)

const NotFound = {template: '<div><h1>Not Found</h1><p>Sorry, the page you are looking for does not exist.</p></div>'}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/books/:id',
      name: 'Book',
      component: Book
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
