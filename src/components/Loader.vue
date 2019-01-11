<template>
  <div class="loader w3 h3"></div>
</template>

<script>
export default {
  name: 'Loader',
  props: ['full']
}
</script>

<style>
.loader {
  border: 10px solid lightgray;
  border-top: 10px solid black;
  border-radius: 50%;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
