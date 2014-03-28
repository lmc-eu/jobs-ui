'use strict';

module.exports = {
    'default': [
        'bower',
        'styles',
        'jshint',
        'browserify'
    ],

    'styles': [
        'styleguide',
        'less'
    ],

    'serve': [
        'styles',
        'connect:livereload',
        'watch'
    ]
};
