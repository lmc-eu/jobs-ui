'use strict';

module.exports = {
    dist: {
        options: {
            report: 'gzip',
            preserveComments: 'some'
        },
        files: {
            'dist/jobs-ui.min.js': '.tmp/jobs-ui.js'
        }
    }
};
