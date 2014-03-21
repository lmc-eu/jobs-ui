'use strict';

module.exports = {
    bower: {
        files: ['bower.json', '.bowerrc'],
        tasks: ['bower']
    },
    styles: {
        files: ['src/**/*.{less,md}', 'lib/styleguide_template/**/*'],
        tasks: ['styleguide', 'less']
    },
    js: {
        files: ['**/*.js', '!docs/**/*'],
        tasks: ['jshint']
    },
    configFiles: {
        files: ['Gruntfile.js', 'grunt/{,*/}*.js'],
        options: {
            reload: true
        }
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            'docs/*.html'
        ]
    }
};