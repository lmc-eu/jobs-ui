'use strict';

module.exports = {
    'default': [
        'clean',
        'bower',
        'dist',
        'docs'
    ],

    'dist': [
        'scripts',
        'styles',
        'copy:dist'
    ],

    'scripts':[
        'jshint',
        'browserify',
        'uglify'
    ],

    'styles': [
        'less',
        'legacssy',
        'cssmin'
    ],

    'docs': [
        'styleguide',
        'copy:docs'
    ],

    'serve': [
        'default',
        'connect:livereload',
        'watch'
    ]
};
