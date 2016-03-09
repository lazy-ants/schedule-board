// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
 
module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',
 
    // // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],
 
    // list of files / patterns to load in the browser
    files: [
    // frameworks and libraries
        'src/bower_components/jquery/dist/jquery.min.js',
        'src/bower_components/bootstrap/dist/js/bootstrap.min.js',
        'src/bower_components/moment/min/moment.min.js',
        'src/bower_components/angular/angular.js',
        'src/bower_components/angular-mocks/angular-mocks.js',
    // source
        'src/js/*.js',
        'src/js/Controllers/*.js',
        'src/js/Directives/*.js',
    // spec
        'spec/**/*.js'
    ], 
 
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true, 
 
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],
 
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};