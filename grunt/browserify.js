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
            '.tmp/index.js': 'index.js'
        }
    }
};
