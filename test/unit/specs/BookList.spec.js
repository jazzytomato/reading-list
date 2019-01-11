import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import fetchMock from 'fetch-mock'
import BookList from '@/components/BookList.vue'
import { BooksURL } from '@/store'

describe('BookList.vue', () => {
  beforeEach(() => {
    fetchMock.get(BooksURL, {})
  })

  afterEach(() => {
    fetchMock.restore()
  })

  describe('When fetching data', () => {
    it('renders the loader', async () => {
      const store = {
        state: {
          books: {
            isFetching: true
          }
        }
      }
      const wrapper = shallowMount(BookList)
      await flushPromises()
      wrapper.setData({ store })
      expect(wrapper.html()).toContain('loader-stub')
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('With no books', () => {
    it('renders empty component', async () => {
      const store = {
        state: {
          books: {
            isFetching: false,
            isLoaded: true,
            isError: false,
            data: []
          }
        }
      }
      const wrapper = shallowMount(BookList)
      await flushPromises()
      wrapper.setData({ store })
      expect(wrapper.html()).toContain('Reading list')
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('With an error fetching data', () => {
    it('renders the error message', async () => {
      const store = {
        state: {
          books: {
            isFetching: false,
            isError: true
          }
        }
      }
      const wrapper = shallowMount(BookList)
      await flushPromises()
      wrapper.setData({ store })
      expect(wrapper.html()).toContain('Error while fetching book data.')
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('With books', () => {
    it('renders the books', async () => {
      const store = {
        state: {
          books: {
            isFetching: false,
            isLoaded: true,
            isError: false,
            data: [
              {id: 'guid-1', title: 'Book 1', author: 'Author 1', cover: 'https://img_url'},
              {id: 'guid-2', title: 'Book 2', author: 'Author 2', cover: 'https://img_url2'},
              {id: 'guid-3', title: 'Book 3', author: 'Author 3', cover: 'https://img_url3'}
            ]
          }
        }
      }
      const wrapper = shallowMount(BookList)
      await flushPromises()
      wrapper.setData({ store })
      expect(wrapper.html()).toContain('Reading list')
      expect(wrapper.html()).toContain('guid-1')
      expect(wrapper.html()).toContain('guid-2')
      expect(wrapper.html()).toContain('guid-3')
      expect(wrapper.element).toMatchSnapshot()
    })
  })
})
