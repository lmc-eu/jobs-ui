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
                    'partials/navigation/images/*',
                    'partials/footer/images/*',
                    'components/featured/images/*'
                ],
                flatten: true,
                dest: 'dist/images/'
            },
            {
                // Fonts
                expand: true,
                cwd: 'src/',
                src: ['modules/icons/fonts/*'],
                flatten: true,
                dest: 'dist/fonts/'
            }
        ]
    },
    docs: {
        files: [
            {
                expand: true,
                src: ['dist/**'],
                dest: '<%= styleguide.docs.dest %>'
            }
        ]
    }
};
