(function() {
  'use strict';

  function HighScore() {}

  HighScore.prototype = {
    create: function () {
      this.backgroundSprite = this.game.make.sprite(0, 0, 'highscoreBack');
      this.backgroundTexture = this.game.add.renderTexture(this.game.width,this.game.height);
      this.game.add.sprite(0,0,this.backgroundTexture);
    },

    update: function () {
      this.backgroundTexture.renderXY(this.backgroundSprite, 0, 0, true);
      this.handleInput();
    },
    handleInput: function() {
      if(this.game.input.keyboard.isDown(Phaser.Keyboard.B)){
        this.game.state.start('menu');
      }
    },
  };

  window['kickakid'] = window['kickakid'] || {};
  window['kickakid'].HighScore = HighScore;
}());