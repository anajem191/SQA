describe('Users Management', function() {

    var jsData= require ("./data.js");
    
    it('Open Angularjs WEbsite', function() {
        
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(jsData.data.firstInput);
        element(by.model('second')).sendKeys(jsData.data.secondInput);
        element(by.id('gobutton')).click();

        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(jsData.data.result);
    });
})