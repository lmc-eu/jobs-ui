'use strict';

module.exports = {
    dist: {
        options: {
            strictMath: true,
            strictUnits: true,
            paths: ['lib/bower_components/']
        },
        files: {
            '<%= styleguide.guideline.dest %>/public/style.css': 'jobs-ui.less'
        }
    }
};