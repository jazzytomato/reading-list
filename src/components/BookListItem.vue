<template>
  <article class="fl w-100 w-50-m w-25-ns pa2-ns">
    <div class="aspect-ratio aspect-ratio--1x1">
      <img :style='{ backgroundImage: `url(${cover})` }'
      class="db bg-center cover aspect-ratio--object" />
    </div>
    <div class="ph2 ph0-ns pb3 link db">
      <h3 class="f5 f4-ns fw3 mb0 black-90">{{title}}</h3>
      <h3 class="f6 f5 fw4 mt2 black-60">{{author}}</h3>
      <router-link
        class="f6 f5 fw4 mt2 black-60 underline"
        :to="{ name: 'Book', params: { id: id }}"
        exact>
        More information
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BookListItem',
  props: ['id', 'title', 'author', 'cover']
}
</script>
