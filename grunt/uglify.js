'use strict';

module.exports = {
    dist: {
        options: {
            report: 'gzip',
            preserveComments: 'some'
        },
        files: {
            '<%= styleguide.docs.dest %>/dist/index.min.js': '.tmp/index.js'
        }
    }
};
