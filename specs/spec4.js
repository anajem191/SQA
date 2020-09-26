describe('Testing', function() {
    it('Calculate', function() {

    browser.waitForAngularEnabled(false);

    browser.get('https://www.google.com/');

    browser.waitForAngularEnabled(true);

      browser.get('https://juliemr.github.io/protractor-demo/');
          
      element(by.model('first')).sendKeys(3);
      element(by.model('second')).sendKeys(7);
      element(by.id('gobutton')).click();
    });
});
