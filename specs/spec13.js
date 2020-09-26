describe('Super Calculator Screen', function() {
  
  var obj= require("../specs/spec13PageObject.js");

    it('Addition Testing and Assertion', function() {

    
        function add(a,b){
          obj.input1.sendKeys(a);    
          obj.input2.sendKeys(b);
          obj.goButton.click();
        }
    
      browser.get('https://juliemr.github.io/protractor-demo/');
       
       add(3,7);
        add(3,9);
        add(9,6);
     
        //Number of elements:
        obj.CountRows();
             obj.LoopAndAssert();
            })
          })