/* jshint node: true */
'use strict';

module.exports = {
  name: 'my-in-repo-addon',

  included: function(app) {
    this._super.included.apply(this, arguments);
  },

  isDevelopingAddon: function() {
    return true;
  }
};
