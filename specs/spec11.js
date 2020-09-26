describe('Testing', function() {

    function add(a,b,o){
        element(by.model('first')).sendKeys(a);   
        element(by.model('second')).sendKeys(b);

        element.all(by.tagName('result in memory')).each(function(result){

       result.getAttribute('value').then(function(values){

        if(values == o)
        {
                result.click();//click the attribute of operator matching tahet
        }
        
    });
       });

        element(by.buttonText('Go!')).click();
      };
    
it('Calculate', function() {
  browser.get('https://juliemr.github.io/protractor-demo/');
   
  add(5,8,'MULTIPLICATION');
  add(3,9,'DIVISION');
  add(1,7,'ADDITION');

  element.all(by.tagName('result in memory')).
  each(function(result){

    result.getAttribute('value').then(function(values){
        
        console.log(values);
     });
    });
  
  });
   
})