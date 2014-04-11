'use strict';

module.exports = {
    docs: {
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
        src: 'src/styleguide.less',
        dest: 'docs'
    }
};