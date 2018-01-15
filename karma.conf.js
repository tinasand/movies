module.exports = function(config) {
  config.set({

    basePath: "",
    frameworks: ["jasmine"],
    files: [
        "bower_components/angular/angular.js",       
        "bower_components/angular-mocks/angular-mocks.js",
        "ts-movies/module.js",
        "ts-movies/**/*.js"
    ],
    exclude: [        
    ],
    preprocessors: {
    },
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    concurrency: Infinity
  });
};