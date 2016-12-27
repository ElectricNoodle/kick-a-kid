window.addEventListener('load', function () {
  'use strict';

  var ns = window['kickakid'];
  var game = new Phaser.Game(640, 480, Phaser.AUTO, 'kickakid-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('highscore', ns.HighScore);
  game.state.add('game', ns.Game);
  /* yo phaser:state new-state-files-put-here */
  game.state.start('boot');
}, false);
/*
var socket = io('http://localhost:9000');
  socket.on('test', function (data) {
    console.log(data);
  });
*/