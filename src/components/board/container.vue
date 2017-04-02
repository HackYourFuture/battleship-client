<template>
  <div class="board">
    <h1>{{ msg }}</h1>
    {{ userName }}
  </div>
</template>

<script>
import main from '../../main'

export default {
  name: 'board',
  data () {
    return {
      msg: 'This is a board',
      userName: main.store.state.userName,
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
