// import Vue from 'vue'
// import BookList from '@/components/BookList'
// jest.mock('fetch', () => ({
//     get: jest.fn(() => Promise.resolve({ data: 3 }))
//   }));

// import fetch from 'fetch'

// describe('BookList.vue', () => {
//   it('should render correct contents', () => {
//     const Constructor = Vue.extend(BookList)
//     const vm = new Constructor().$mount()
//     expect(vm.$el.querySelector('h1').textContent)
//       .toEqual('Books')
//   })
// })

import { shallowMount } from '@vue/test-utils'
import fetchMock from 'fetch-mock'
import flushPromises from 'flush-promises'
import BookList from '@/components/BookList.vue'

const apiData = {
  books: []
}

describe('BookList.vue', () => {
  beforeEach(() => {
    fetchMock.get('http://www.mocky.io/v2/5c30dff23000006800e77ace', apiData)
  })

  it('renders empty component', async () => {
    const wrapper = shallowMount(BookList)
    await flushPromises()
    expect(wrapper.element).toMatchSnapshot()
  })

  afterEach(() => {
    fetchMock.restore()
  })
})
