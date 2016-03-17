// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    // this.on('add', function() {
    //   console.log('Change event in SongQueue colletion');
    // });
  },

  addSong: function(song) {
    this.add(song);
    this.trigger('update', this);
    //console.log("Inside SongQueue.add for this = " + this);
  }

});