// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    
  },

  playFirst: function() {
    if (this.at(0) ) {
      this.at(0).play();
    } 
  },

  nextSong: function() {
    this.shift();
    this.playFirst();
  },

  dequeue: function(song) {
    this.remove(song);
  }

});