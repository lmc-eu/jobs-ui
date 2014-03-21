'use strict';

module.exports = {
    'default': [
        'bower',
        'styles',
        'jshint'
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
