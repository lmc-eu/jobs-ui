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
            '.tmp/jobs-ui.js': 'index.js'
        }
    }
};
