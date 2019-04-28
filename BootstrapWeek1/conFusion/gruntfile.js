'use strict';

const sass = require('node-sass');

module.exports = function(grunt) {
    
    require('time-grunt')(grunt);
    require('browser-sync-grunt')(grunt);
    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: false
            },
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        watch: {
            files: 'css/*.scss',
            task: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        }
    });

    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
};
