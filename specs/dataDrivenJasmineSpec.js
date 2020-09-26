//const { UseExistingWebDriver } = require("protractor/built/driverProviders");
var using=require('jasmine-data-provider');

describe('Users Management', function() {

    var jasmineData= require ("../data/dataJasmine.js");
    
    using(jasmineData.data, function(dataSet,description){
    it('Open Angularjs WEbsite', function() {
        
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(dataSet.firstInput);
        element(by.model('second')).sendKeys(dataSet.secondInput);
        element(by.id('gobutton')).click();

        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(dataSet.result);
    });
})
})