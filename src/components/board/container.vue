<template>
  <div class="board">
    <h1>{{ msg }}</h1>
    <div v-if="!finished">
      <h1>me</h1>
      <div class="board_matrix">
        <div v-for="coord in userBoard" class="board_matrix_coord">
        <div v-if="coord.hit">
          <div v-if="coord.hasBoat">
            X
          </div>
          <div v-else>O</div>
        </div>
        <div v-else>_</div>
        </div>
      </div>
      <h1>the other</h1>
      <div class="board_matrix">
        <div v-for="coord in oponentBoard" class="board_matrix_coord">
        <div v-if="coord.hit">
          <div v-if="coord.hasBoat">
            X
          </div>
          <div v-else>O</div>
        </div>
        <div v-else>_</div>
        </div>
      </div>
    </div>
    <div v-else>
      <div v-if="winnerId == user.id">
        congrats, you win
      </div>
      <div v-else>jammer, you lose</div>
    </div>
  </div>
</template>

<script>
import main from '../../main'

export default {
  name: 'board',
  data () {
    return {
      user: main.store.state.user,
      oponent: main.store.state.oponent,
      finished: main.store.state.game.finished,
      winnerId: main.store.state.game.winnerId,
      userBoard: main.store.state.userCoordinates,
      oponentBoard: main.store.state.userCoordinates,
      msg: main.store.state.user.name + ' vs ' + main.store.state.oponent.name,
    }
  },
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
