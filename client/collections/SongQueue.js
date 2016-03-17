// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    
  },

  playFirst: function() {
    console.log(this.at(0));
    this.at(0).play();
  },

  nextSong: function() {
    this.shift();
    this.playFirst();
  }

});