(function() {
  'use strict';

  function Menu() {}

  Menu.prototype = {
    create: function () {
     // this.background = game.add.renderTexture(800, 600, 'mousetrail');
     // this.background_image = game.make.sprite(0, 0, 'menu_background');
     // this.background_image.anchor.set(0.5);
      this.input.onDown.add(this.onDown, this);
    },

    update: function () {

    },

    onDown: function () {
      this.game.state.start('game');
    }
  };

  window['kickakid'] = window['kickakid'] || {};
  window['kickakid'].Menu = Menu;
}());