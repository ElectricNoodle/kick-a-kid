(function() {
  'use strict';
  var that;
  var playerSprite;
  function Game() {}

	Game.prototype = {
		preload: function () {
			this.game.load.spritesheet('playerSprite', 'assets/images/Green_Child.png', 64, 64, 6);
		},
		create: function () {
			that = this;
			this.initPlayer();

		},
		update: function () {
			this.checkInput();
		},
		initPlayer : function () {
			playerSprite = this.game.add.sprite(this.game.world.centerX - 64,this.game.world.centerY - 64,'playerSprite');
			playerSprite.animations.add('walk',[0,1,2,3,4,5],10,true);
			playerSprite.animations.add('still',[1],1,true);

			
		},
		checkInput : function () {
			if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
		        playerSprite.x -= 2;
		        playerSprite.animations.play('walk');
		    }
		    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
		        playerSprite.x += 2;
		        playerSprite.animations.play('walk');
		    }
		    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)){
		        playerSprite.y -= 2;
		        playerSprite.animations.play('walk');
		    }
		    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
		        playerSprite.y += 2;
		        playerSprite.animations.play('walk');
		    }else{
				playerSprite.animations.play('still');
		    }
		},
	};
	window['kickakid'] = window['kickakid'] || {};
	window['kickakid'].Game = Game;
}());