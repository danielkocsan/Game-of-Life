module.exports = function (grunt) {
    grunt.initConfig({
        cucumberjs: {
            src: 'features',
            options: {
                steps: "steps",
                format: 'pretty'
            }
        }
    });

    grunt.loadNpmTasks('grunt-cucumber');
    grunt.loadNpmTasks('grunt-mocha');
};
