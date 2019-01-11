<template>
  <li class="flex items-center flex-wrap ba--light-gray">
    <div class="w4">
      <img :src="cover"/>
    </div>
    <span>{{author}} - {{title}}</span>
  </li>
</template>

<script>
export default {
  name: 'BookListItem',
  props: ['id', 'title', 'author', 'cover']
}
</script>
