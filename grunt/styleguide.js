'use strict';

module.exports = {
    guideline: {
        options: {
            framework: {
                name: 'kss',
                options: {
                    version: '<%= package.version %>'
                }
            },
            template: {
                src: 'lib/styleguide_template'
            }
        },
        src: 'src/core.less',
        dest: 'docs'
    }
};