const { browser, element } = require("protractor");

describe('TestFill', function() {

  var js= require ("../data/dataProto.js");

    it('ProtoCom', function() {
      browser.get('https://rahulshettyacademy.com/angularpractice/');

        element(by.name('name')).sendKeys(js.dataProto.name);

        element(by.name('email')).sendKeys(js.dataProto.email);

        element(by.id('exampleCheck1')).click();

        element(by.id('exampleInputPassword1')).sendKeys(js.dataProto.password);
      
        element(by.id('exampleFormControlSelect1')).element(by.css("option:nth-child(2)")).click();

        element(by.id('inlineRadio1')).click();
      
      element(by.name('bday')).sendKeys(js.dataProto.bday);

    //  element(by.css("input['btn btn-success']")).click();
    element(by.buttonText('Submit')).click();
browser.sleep(5000);

     expect(element(by.css("div[class='alert alert-success alert-dismissible']")).getText()).toContain(js.dataProto.result);

      element(by.css("div[class='alert alert-success alert-dismissible']")).getText().then(function(res){
       console.log(res);
     });
      
    });
});