import main from '../main'
import io from 'socket.io-client';
const socket = io('https://quiet-everglades-50730.herokuapp.com/');

export const connect = () => {
	socket.on('connect', () => {
		let player;
	  playerService.init()
	      .then(res => {
	        player = res;
	        return gameService.init(player)
	      })
	      .then(res => {
	        socket.join(res.gameId);
	        socket.emit('joined', {
	          gameId: res.gameId,
	          playerId: player.playerId
	        })
	  });
	});
}

export const attack = () => {
	socket.emit('attack', {});
}

export const attacked = () => {
	socket.on('attacked', data => {
		// { hit: bool, sunk: bool, win: bool }
	});
}
