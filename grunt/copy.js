'use strict';

module.exports = {
    docs: {
        files: [{
            expand: true,
            src: ['dist/**'],
            dest: '<%= styleguide.guideline.dest %>'
        }]
    }
};
