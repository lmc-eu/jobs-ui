'use strict';

module.exports = {
    dist: {
        options: {
            strictMath: true,
            strictUnits: true,
            relativeUrls: false,
            paths: ['lib/bower_components/']
        },
        files: {
            '.tmp/style.css': 'style.less'
        }
    }
};
