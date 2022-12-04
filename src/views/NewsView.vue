<template>
  <div><list-item></list-item></div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
//import eventBus from '../utils/bus.js';

export default {
  components: {
    ListItem: ListItem,
  },

  mounted() {
      this.eventBus.emit('end:spinner');
  },
  // created() {
  //   this.eventBus.emit('start:spinner');
  //   this.$store.dispatch('FETCH_LIST', this.$route.name)
  //   .then(() => {
  //     console.log('fetched');
  //     this.eventBus.emit('end:spinner');
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // },
}
</script>

<style>

</style>