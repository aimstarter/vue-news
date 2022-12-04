<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
// import { fetchAskList } from "../api/index.js";

export default {
  components: { ListItem },
  created() {
    // this.eventBus.emit('start:spinner');
    // this.$store.dispatch('FETCH_LIST', this.$route.name)
    //   .then(() => {
    //     console.log('fetched');
    //     this.eventBus.emit('end:spinner');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
  mounted() {
    this.eventBus.emit('end:spinner');
  },
  // computed: {
  //   ListItem: ListItem,
  // }
  // computed: {
  //   ...mapGetters({
  //     askItems: "fetchedAsk",
  //   }),
  //   // ...mapGetters([  // mapGetters 배열 표기법
  //   //   'fetchedAsk',
  //   //  ]),
  // },
  // created() {
  //   this.$store.dispatch("FETCH_ASK");
  // },
};
</script>
