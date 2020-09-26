describe('Testing', function() {
    it('Calculate', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(3);    
        element(by.model('second')).sendKeys(7);
        element(by.id('gobutton')).click();

        element(by.model('first')).sendKeys(8);    
        element(by.model('second')).sendKeys(9);
        element(by.id('gobutton')).click();

        element(by.model('first')).sendKeys(4);    
        element(by.model('second')).sendKeys(6);
        element(by.id('gobutton')).click();
     
        //Number of elements:
        element.all(by.repeater('result in memory')).count().then(function(result){
          console.log(result); 
        });

        //Display Result
         element.all(by.repeater('result in memory')).each(function(answer){
           answer.element (by.css ("td:nth-child(3)")).getText().then(function(result){
            console.log(result); 
           });
         
        });
})
})