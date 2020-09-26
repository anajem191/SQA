describe('Testing', function() {
    it('Calculate', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(3);

        element(by.model('operator')).element(by.css("option[value='MULTIPLICATION']")).click();//clicking the combox then value
    
        element(by.model('second')).sendKeys(7);

        element(by.id('gobutton')).click();
     
       
  browser.sleep(8000);
    });
});
