// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import api from './api'

Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

const store = new Vuex.Store({
  state: {
    userName: 'user',
    oponentName: 'oponent',
  },
  mutations: {
    setUserName(state, name) {
      state.userName = name;
    }
  }
})

export default {
  store
}
