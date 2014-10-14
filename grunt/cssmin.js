'use strict';

module.exports = {
    dist: {
        options: {
            report: 'gzip'
        },
        expand: true,
        cwd: '.tmp/',
        src: ['*.css', '!*.min.css'],
        dest: '<%= styleguide.docs.dest %>/dist',
        ext: '.min.css'
    }
};
