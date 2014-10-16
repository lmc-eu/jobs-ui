'use strict';

module.exports = {
    'default': [
        'clean',
        'bower',
        'copy:dist',
        'docs',
        'dist'
    ],

    'dist': [
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
