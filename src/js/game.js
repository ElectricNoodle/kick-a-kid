(function() {
  'use strict';
  var that;
  function Game() {}

	Game.prototype = {
		create: function () {
			that = this;
		},
		update: function () {

		},
	};
	window['kickakid'] = window['kickakid'] || {};
	window['kickakid'].Game = Game;
}());