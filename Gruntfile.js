'use strict';

module.exports = function(grunt) {
    
    grunt.util.linefeed = '\n';

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            styles: {
                files: ['**/*.less'],
                tasks: ['less', 'docs']
            }
        },
        less: {
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
        },
        styleguide: {
            guideline: {
                options: {
                    framework: {
                        name: 'kss',
                        options: {
                            version: '<%= pkg.version %>'
                        }
                    },
                    template: {
                        src: 'lib/styleguide-template'
                    }
                },
                src: 'src/core.less',
                dest: 'docs'
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', [
        'styleguide',
        'less'
    ]);
};
