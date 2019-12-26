<template>
  <div>
    Crag name: {{ this.$route.params.name }}
    Grade: {{ this.$route.params.rating }}
    <a :href="this.$route.params.url">URL</a>
    IMAGE: <img :src="this.$route.params.image">
  </div>
</template>

<script>
export default {
  name: 'Crag',
  props: ['name', 'rating', 'url', 'image'],
};
</script>
