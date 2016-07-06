import Ember from 'ember';

export default Ember.Component.extend({
  makeNote: Ember.on("didInsertElement", function() {
    console.log("added in-repo addon component element");
  })
});
