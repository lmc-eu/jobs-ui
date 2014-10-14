'use strict';

module.exports = {
    'default': [
        'clean',
        'bower',
        'docs',
        'dist'
    ],

    'dist': [
        'copy:dist',
        'styles',
        'scripts'
    ],

    'scripts': [
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
