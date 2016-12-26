(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {
    preload: function () {
      this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
      this.load.setPreloadSprite(this.asset);

      this.load.image('menu_background', 'assets/images/menu_background.png');
/*
      this.load.shader('fisheye', 'assets/shaders/Fisheye.frag');
      */
       this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
       this.loadResources();

      this.ready = true;
    },

    loadResources: function () {
      // load your assets here
    },

    create: function () {

    },

    update: function () {
      // if (!!this.ready) {
        this.game.state.start('menu');
      // }
    },

    onLoadComplete: function () {
       this.ready = true;
    }
  };

  window['kickakid'] = window['kickakid'] || {};
  window['kickakid'].Preloader = Preloader;
}());