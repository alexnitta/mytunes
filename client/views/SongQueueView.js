// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {

    this.collection.on('add', function(song) {

      // expecting us to call the collection's playFirst method
      
      if (this.collection.length === 1) {
        this.collection.playFirst();
      }

      this.render();
    }, this);

    // this.collection.on('remove', function(song) {

    //   // if song being removed is the first one in queue
    //   // call playFirst

    //   if ()
    //   this.collection.playFirst();


    //   this.render();
    // }, this);

    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

  dequeue: function(song, currentSong) {
    if (song === currentSong) {
      this.collection.playFirst();
    }

    this.render();
  }


});
