'use strict';

module.exports = {
    dist: {
        options: {
            report: 'gzip',
            preserveComments: 'some'
        },
        files: {
            'dist/index.js': '.tmp/index.js'
        }
    }
};
