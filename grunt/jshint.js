'use strict';

module.exports = {
    all: [
        'Gruntfile.js',
        'grunt/*.js',
        'src/**/*.js'
    ],
    options: {
        reporter: require('jshint-stylish'),
        'node': true,
        'browser': true,
        'esnext': true,
        'bitwise': true,
        'camelcase': true,
        'curly': true,
        'eqeqeq': true,
        'immed': true,
        'indent': 4,
        'latedef': true,
        'newcap': true,
        'noarg': true,
        'quotmark': 'single',
        'undef': true,
        'unused': true,
        'strict': true,
        'trailing': true,
        'smarttabs': true,
        'jquery': true
    }
};