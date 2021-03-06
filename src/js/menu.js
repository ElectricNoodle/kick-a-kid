(function() {
  'use strict';

  function Menu() {}

  Menu.prototype = {
    create: function () {
      this.backgroundSprite = this.game.make.sprite(0, 0, 'menuBackground');
      this.backgroundTexture = this.game.add.renderTexture(this.game.width,this.game.height);
      this.game.add.sprite(0,0,this.backgroundTexture);
    },

    update: function () {
      this.backgroundTexture.renderXY(this.backgroundSprite, 0, 0, true);
      this.handleInput();
    },
    handleInput: function() {
      if(this.game.input.keyboard.isDown(Phaser.Keyboard.S)){
        this.game.state.start('game');
      }else if(this.game.input.keyboard.isDown(Phaser.Keyboard.H)){
        this.game.state.start('highscore');
      }
    },
  };

  window['kickakid'] = window['kickakid'] || {};
  window['kickakid'].Menu = Menu;
}());