<template>
  <div class="user-container">
    <div><i class="fa-solid fa-user"></i></div>
    <div class="user-description">
      <template v-if="userInfo.id">
        <div>username: {{ userInfo.id }}</div>
        <div classs="time">time: {{ userInfo.created }}</div>
      </template>
      <template v-else>
        <div>username: {{ fetchedItem.user }}</div>
        <div classs="time">time: {{ fetchedItem.time_ago }}</div>
      </template>
    </div>
  </div>
  <section v-if="this.$route.name === 'item'">
    <h2>{{ fetchedItem.title }}</h2>
  </section>
  <section v-if="this.$route.name === 'item'">
    <!-- 질문 댓글 -->
    <div v-html="fetchedItem.content"></div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    userInfo() {
      // UserView에서 userInfo computed함수를 props로 내려받아서 처리할 수도 있다.
      return this.$store.state.user;
    },
    ...mapGetters(["fetchedItem"]),
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