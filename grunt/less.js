'use strict';

module.exports = {
    dist: {
        options: {
            strictMath: true,
            strictUnits: true,
            paths: ['lib/bower_components/']
        },
        files: {
            '.tmp/style.css': 'style.less'
        }
    }
};