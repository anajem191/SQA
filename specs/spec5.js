describe('Testing', function() {
    it('Calculate', function() {
        browser.waitForAngularEnabled(false);

      browser.get('https://www.google.com/');
     
    element(by.css("input[class='gLFyf gsfi']")).sendKeys("Protractor Testing");
      
    browser.sleep(8000);//between 2 elements in non angular site 
       
      element(by.name("btnK")).click();

      //expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");
    });
});
