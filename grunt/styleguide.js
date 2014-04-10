'use strict';

module.exports = {
    guideline: {
        options: {
            framework: {
                name: 'kss',
                options: {
                    version: '<%= package.version %>',
                    mask: 'docs.less'
                }
            },
            template: {
                src: 'lib/styleguide_template'
            }
        },
        src: 'src/styleguide.less',
        dest: 'docs'
    }
};