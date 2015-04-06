module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js']
    },
    imagemin: {
         dist: {
             options: {
                optimizationLevel: 5
             },
             files: [{
expand: true,
cwd: 'src/images',
src: ['*.{png,jpg,gif}'],
dest: 'dist/'
}]

         }
    },
    copy: {
        main: {
        cwd: 'src/',
        expand: true,
        src: ['**'],
        dest: 'dist/'
      },
    },
    clean: {
        /*    Warning! A destructive task.
         *  Why bother? so that I'm sure dist/ is full of files only generated by the last call to 'grunt'
         *  This has the desired effect of deleting things in src/ directory, and letting grunt
         *  simultaneously delete it from dist/. Grunt is a build tool and when you look at a build, you want
         *  to know that the build contains no residue from previous builds, to ensure success when deploying the project elsewhere.
         */
        main: ['dist']
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  
  grunt.registerTask('default', ['clean:main', 'copy', 'imagemin']);

};