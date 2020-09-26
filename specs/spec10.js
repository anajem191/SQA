describe('Testing', function() {

        function add(a,b){
            element(by.model('first')).sendKeys(a);    
            element(by.model('second')).sendKeys(b);
            element(by.id('gobutton')).click();
        }
    it('Calculate', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');
       
      add(3,7);
      add(5,8);
      add(1,7);
     
        //Number of elements:
        element.all(by.repeater('result in memory')).count().then(function(result){
          console.log(result); 
        });

        //Display Result
         element.all(by.repeater('result in memory')).each(function(answer){
           answer.element (by.css ("td:nth-child(3)")).getText().then(function(result){
            console.log(result); 
           });

         //To display value of Result in telet row yaane index =2 cz starting at 0// so rehna tene row w fetna 3a telet col umn-element li hye result
         element.all(by.repeater('result in memory')).get(2).element(by.css ("td:nth-child(3)")).getText().then(function(result){
           console.log(result); 
          });
        });
       
})
})