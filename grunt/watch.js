'use strict';

module.exports = {
    bower: {
        files: ['bower.json', '.bowerrc'],
        tasks: ['bower']
    },
    styles: {
        files: ['src/**/*.{less,md}'],
        tasks: ['styles', 'docs']
    },
    scripts: {
        files: ['**/*.js', '!docs/**/*'],
        tasks: ['scripts', 'docs']
    },
    docs: {
        files: ['lib/styleguide_template/**/*'],
        tasks: ['docs']
    },
    configFiles: {
        files: ['Gruntfile.js', 'grunt/{,*/}*.js'],
        options: {
            reload: true
        }
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            'docs/*.html'
        ]
    }
};