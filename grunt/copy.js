'use strict';

module.exports = {
    dist: {
        files: [
            {
                // Images
                expand: true,
                cwd: 'src/',
                src: [
                    'partials/header/images/*',
                    'partials/footer/images/*',
                    'components/featured/images/*'
                ],
                flatten: true,
                dest: 'dist/images/'
            },
            {
                // Fonts
                expand: true,
                cwd: 'src/modules/icons/fonts/',
                src: ['*.eot'],
                flatten: true,
                dest: 'dist/fonts/'
            }
        ]
    },
    docs: {
        files: [
            {
              expand: true,
              src: ['dist*//**'],
              dest: '<%= styleguide.docs.dest %>'
            },
            {
                expand: false,
                src: ['lib/styleguide_template/_htaccess'],
                dest: '<%= styleguide.docs.dest %>/.htaccess'
            }
        ]
    }
};
