/* jshint node: true */
'use strict';

var fs = require("fs");
var mergeTrees = require("broccoli-merge-trees");
var Funnel = require("broccoli-funnel")

module.exports = {
  name: 'my-in-repo-addon',

  treeForTemplates: function(tree) {
    if (tree) {
      return mergeTrees([tree, this.podsTemplates()]);
    } else {
      return this.podsTemplates();
    }
  },

  podsTemplates: function() {
    // Add templates from pods directory, since Ember CLI doesn't include them by default
    return new Funnel(this.project.root + '/lib/my-in-repo-addon/app', {
      include: ['**/*.hbs'],

      getDestinationPath: function(relativePath) {
        if (relativePath.indexOf('/template.hbs') !== -1) {
          // Remove ".template" from the path, eg: pods/posts/template.hbs => templates/posts.hbs
          return relativePath.substr(0, relativePath.lastIndexOf('/')) + '.hbs';
        } else {
          return relativePath;
        }
      }
    });
  },

  isDevelopingAddon: function() {
    return true;
  }
};
