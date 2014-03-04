var Yadda = require('yadda');
Yadda.plugins.mocha();

new Yadda.FeatureFileSearch('features').each(function(file) {
    console.log(file);
    feature(file, function(feature) {

        var library = require('./featureSteps');
        var yadda = new Yadda.Yadda(library);

        scenarios(feature.scenarios, function(scenario, done) {
            yadda.yadda(scenario.steps, done);
        });
    });
});