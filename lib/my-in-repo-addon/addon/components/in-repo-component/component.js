import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,

  makeNote: Ember.on("didInsertElement", function() {
    console.log("added in-repo addon component element");
  })
});
