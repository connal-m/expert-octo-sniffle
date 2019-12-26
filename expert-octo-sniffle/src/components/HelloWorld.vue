<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table class="crags">
      <tr>
        <th>Name</th>
      </tr>
      <tr v-for="crag in crags">
        <td>
          <router-link :to="{ name: 'Crag', params: {name: crag.name, rating: crag.rating, url: crag.url, image: crag.imgMedium}}">{{crag.name}}</router-link>
        </td>
      </tr>
    </table>
    <router-view/>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'HelloWorld',
  props: ['msg'],
  computed: mapState(['crags']),
  created() {
    this.$store.dispatch('loadCrags');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  width: 100%;
}
</style>
