import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchCommentItem, fetchList } from "../api/index.js";

export default {
  // promise
    // FETCH_NEWS(context) {
    //   fetchNewsList()
    //     .then(response => {
    //       console.log(response.data);
    //       context.commit("SET_NEWS", response.data);
    //       return response;
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },

    // async
    async FETCH_NEWS(context) {
      const response = await fetchNewsList();
      context.commit('SET_NEWS', response.data);

      return response;
    },

    // FETCH_JOBS(context) {
    //   fetchJobsList()
    //     .then(response => {
    //       console.log(response.date);
    //       context.commit('SET_JOBS', response.data);
    //     })
    //     .catch(error => console.log(error))
    // },

    async FETCH_JOBS(context) {
      try {
        const response = await fetchJobsList();
        context.commit('SET_JOBS', response.data);
        
        return response;
      } catch(error) {
        console.log(error);
      }
    },

    FETCH_ASK(context) {
      fetchAskList()
        //.then(response => this.users = response.data)
        .then(function (response) {
          console.log(response);
          context.commit('SET_ASK', response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    FETCH_USER(context, name) {
      fetchUserInfo(name)
        .then(response => {
          context.commit('SET_USER', response.data);
        })
        .catch(error => console.log(error));
    },

    FETCH_ITEM(context, id) {
      fetchCommentItem(id)
        .then(response => {
          context.commit('SET_ITEM', response.data);
        })
        .catch(error => console.log(error));
    },

    FETCH_LIST(context, pageName) {
      console.log('fetchList call!');

      return fetchList(pageName)
        .then(response => {
          console.log(4)
          context.commit('SET_LIST', response.data);

          return response;
        })
        .catch(error => console.log(error));
    },
}