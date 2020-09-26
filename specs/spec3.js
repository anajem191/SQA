describe('Testing', function() {
    it('Calculate', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(3);
        element(by.model('second')).sendKeys(7);
        element(by.id('gobutton')).click();
      //element(by.css("h2[class='ng-binding']")).getText().then(function(result){
        //  console.log(result);
      //});
       //element(by.model('operator')).then(function(options){options[MULTIPLICATION].click()});
       expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");
///browser.sleep(8000);
    });
});
