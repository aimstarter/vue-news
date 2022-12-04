<template>
  <div>
    <section>
      <!-- 사용자 상세정보 -->
      <!-- <div class="user-container">
        <div><i class="fa-solid fa-user"></i></div>
        <div class="user-description">
          <router-link v-bind:to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div>
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2> -->
      <user-profile></user-profile>
    </section>
    <!-- <p>{{ itemInfo.title }}</p>
    <div v-html="itemInfo.content"> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from "../components/UserProfile.vue";

export default {
  components: { 
    UserProfile 
  },

  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    console.log(itemId);

    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style .scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.2rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>