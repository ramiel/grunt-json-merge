/*
 * grunt-json-merge
 * https://github.com/ramiel/grunt-json-merge
 *
 * Copyright (c) 2014 Fabrizio "Ramiel" Ruggeri
 * Licensed under the MIT license.
 */

'use strict';

var util = require('util'),
    _ = require('underscore'),
    underscoreDeepExtend = require('underscore-deep-extend');

_.mixin({deepExtend: underscoreDeepExtend(_)});

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('json_merge', 'Grunt plugin to merge JSON files handling override of keys', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
        replacer: null,
        space: "\t"
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
        // Concat specified files.
        var JSONS = f.src.filter(function(filepath) {
            // Warn on and remove invalid source files (if nonull was set).
            if (!grunt.file.exists(filepath)) {
              grunt.log.warn('Source file "' + filepath + '" not found.');
              return false;
            } else {
              return true;
            }
        }).map(function(filepath) {
            // Read file source.
            return grunt.file.readJSON(filepath);
        });
        
        try {
          var merged = _.deepExtend.apply(_,JSONS);
          //_.extend.apply( _ , [merged].concat(JSONS) );
          // Handle options.
          
      
          // Write the destination file.
          grunt.file.write(f.dest, JSON.stringify(merged, options.replacer, options.space) );
      
          // Print a success message.
          grunt.log.writeln('File "' + f.dest + '" created.');
        } catch(e) {
          grunt.fail.warn(e);
        }
    });
  });

};
