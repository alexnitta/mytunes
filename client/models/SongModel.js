// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    url: ''
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    // fill out this function to pass first spec
    this.trigger('enqueue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },
  
  dequeue: function() {
    this.trigger('dequeue', this);
  }

});
