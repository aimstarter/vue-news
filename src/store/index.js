import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    list: [],
    user: {},
    item: [],
    trxCommit: false,
  },

  getters: {  // computed와 동일한 속성임. 단지 store에 있음.
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedItem(state) {
      return state.item;
    }
  },

  mutations: mutations, // 앞뒤가 동일하면 mutations:만 표기해도 됨.

  actions: actions, // ==> actions만 표기해도 됨.(앞뒤가 동일하므로)
  // getters,
  // mutations,
  // actions,
});

export {
  store
}