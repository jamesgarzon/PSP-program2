// Karma configuration
// Generated on Sat Sep 03 2016 18:27:26 GMT-0500 (COT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai', 'chai'],


    // list of files / patterns to load in the browser
    files: [
    	'client/bower_components/angular/angular.js',
        'client/bower_components/angular-mocks/angular-mocks.js',
        'client/bower_components/angular-ui-router/release/angular-ui-router.js',
    	'client/bower_components/ng-file-upload/ng-file-upload.js',
        // 'client/app/PSP2/psp2.js',
        'client/app/app.js',
        'client/services/**/*.js',
        // 'client/app/PSP2/*.js',
    	'client/test/**/*.js'
    ],

    // list of files to exclude
    exclude: [],

    // plugins: [
    //   // require('karma-chai-plugins'),
    //   // require('karma-chrome-launcher'),
    //   require('karma-coverage'),
    //   // require('karma-firefox-launcher'),
    //   require('karma-mocha'),
    //   require('sinon-mocha'),
    //   // require('karma-chai-plugins'),

    //   // require('karma-spec-reporter'),
    //   require('karma-phantomjs-launcher'),
    //   // require('karma-script-launcher'),
    //   require('karma-webpack')
    //   // require('karma-sourcemap-loader')
    // ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        // 'client/test/*_test.js': ['webpack'],
        // 'client/test/main*.js': ['coverage']
        // 'test/test_index.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
