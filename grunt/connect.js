'use strict';

module.exports = {
    options: {
        port: 9001,
        open: true,
        hostname: 'localhost',
        livereload: 35729
    },
    livereload: {
        options: {
            middleware: function(connect) {
                return [
                    connect.static('docs')
                ];
            }
        }
    }
};