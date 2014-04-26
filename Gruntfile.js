"use strict"

/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        path: {
            project: './compass',
        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    hostname : "localhost",
                    base: '<%= path.project %>',
                    keepalive: false, // keepaliveがtrueの状態だと当タスク以降が実行されないので注意
                },
            }
        },
        compass: {
            dist: {
                options: { // タスクレベルのオプション
                    config: '<%= path.project %>/config.rb',
                    outputStyle: 'expanded',
                }
            },
        },
        watch: {
            options: { // Start a live reload server on the default port 35729
                livereload: true,
            },
            files: [
                '<%= path.project %>/sass/*.scss',
                '<%= path.project %>/index.html'
            ],
            tasks: ['compass'],
        },
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Default task.
    grunt.registerTask('default', ['connect', 'watch']);

};