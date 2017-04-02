<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="!inputName">
      <button v-on:click="onStart">start</button>
    </div>
    <div v-if="inputName">
      </br>
      name:
      </br>
      <input type="text" v-model="name"/>
      <button v-on:click="onReady">ready!</button>
    </div>
  </div>
</template>

<script>
import main from '../../main'
import router from '../../router'

export default {
  name: 'hello',
  data () {
    return {
      name: '',
      msg: 'Welcome to HYF battleship',
      inputName: false,
    }
  },
  methods: {
    onStart: function() {
      this.inputName = true;
    },
    onReady: function() {
      main.store.commit('setUserName', this.name)
      router.push({ name: 'Board', params: { id: 1 }})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
