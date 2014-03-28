'use strict';

module.exports = {
    dist: {
        options: {
            external: [
                'jQuery'
            ],
            transform: [
                'debowerify'
            ]

        },
        files: {
            'docs/public/viktor.js': 'index.js'
        }
    }
};
