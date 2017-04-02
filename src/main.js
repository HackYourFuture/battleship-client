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

let createMap = () => {
  let a = [];
  for (let i =0; i<10; i++) {
    // a[i] = new Array(10);
    for (let e =0; e<10; e++) {
      a.push({ x: i, y: e, hit: Math.random() >= 0.5, hasBoat: Math.random() >= 0.5 });
    }
  }
  console.log(a)
  return a;
}

const store = new Vuex.Store({
  state: {
    user: {
      id: 1,
      name: '',
    },
    oponent: {
      id: 2,
      name: 'oponent',
    },
    game: {
      started: false,
      finished: false,
      winnerId: null,
    },
    userCoordinates: createMap(),
    oponentCoordinates: createMap(),
    boats: [
      {length: 4, startCoord: {}, endCoord: {}},
      {length: 3, startCoord: {}, endCoord: {}},
      {length: 3, startCoord: {}, endCoord: {}},
      {length: 2, startCoord: {}, endCoord: {}},
      {length: 2, startCoord: {}, endCoord: {}},
      {length: 2, startCoord: {}, endCoord: {}},
      {length: 1, startCoord: {}, endCoord: {}},
      {length: 1, startCoord: {}, endCoord: {}},
      {length: 1, startCoord: {}, endCoord: {}},
      {length: 1, startCoord: {}, endCoord: {}},
    ],
  },
  mutations: {
    setUserName(state, name) {
      state.user.name = name;
    }
  }
})

export default {
  store
}
