'use strict';

module.exports = {
    dist: {
        options: {
            report: 'gzip',
            preserveComments: 'some'
        },
        files: {
            'dist/index.min.js': '.tmp/index.js'
        }
    }
};
