'use strict';

module.exports = function(grunt) {
    
    grunt.util.linefeed = '\n';

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        config: {
            package: grunt.file.readJSON('package.json')
        }
    });
};