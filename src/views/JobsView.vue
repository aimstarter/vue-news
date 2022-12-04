<template>
  <div>
     <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  components: {
      ListItem: ListItem,
  },
  created() {
    // this.eventBus.emit('start:spinner');
    // this.$store.dispatch('FETCH_LIST', this.$route.name)
    // .then(() => {
    //   console.log('fetched');
    //   this.eventBus.emit('end:spinner');
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    // setTimeout(() => {
    //   this.$store.dispatch('FETCH_LIST', this.$route.name)
    //     .then(() => {
    //       console.log('fetched');
    //       this.eventBus.emit('end:spinner');
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }, 1000);
  },
  mounted() {
    this.eventBus.emit('end:spinner');
  },
};
</script>
