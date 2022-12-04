<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
//import eventBus from "./utils/bus.js";

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    this.eventBus.on('start:spinner', this.startSpinner);
    //bus.$on('start:spinner', () => this.loadingStatus = true);
    this.eventBus.on('end:spinner', this.endSpinner);
  }, 
  beforeUnmount() {
    this.eventBus.off('start:spinner', this.startSpinner);
    this.eventBus.off('end:spinner', this.endSpinner);
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #35495e;
}
a:hover {
  color: #42b883;
}
a.router-link-exact-active {
  text-decoration: underline;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>