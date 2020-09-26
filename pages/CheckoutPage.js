const { element } = require("protractor");

function CheckoutPage(){

    this.Shop= function(){
        element(by.linkText('Shop')).click(); 
     }
 
     this.Add= function(value){
         element.all(by.css("button[class='btn btn-info']")).get(0).click();
     
     }
 this.assertCheckout=function(value){
     element(by.partialLinkText('Checkout')).getText().then(function(assertion){
         //console.log(assertion); btbt3le checkout(2)
          var split= assertion.split("(");
        //  console.log(split[0]);//checkout
          console.log(split[1]);//2)
          var x = split[1].trim().charAt(0);
             console.log(x);
           //  var y=x+1;
             //console.log(y);
             expect(x).toBe(value);
      });
   }

     this.CheckOut= function(value){
         element(by.css("a[class='nav-link btn btn-primary']")).click();
     }

    this.CheckoutFinal=function(value){
     element.all((by.css("button[class='btn btn-success']"))).get(0).click();
    }
 
    this.country = function(value){
     element(by.id('country')).sendKeys(value);}
     
     this.ChooseC=function(){
          element(by.css("div[class='suggestions']")).element(by.css("a")).click();
     }
     
        // this.Purchase=function(){
        //     element(by.css("input[class='btn btn-success btn-lg']")).click();

        // }
        // this.AgreeCheckbox = function(){
        //     element(by.id('checkbox2')).click();
        // };
    };
 module.exports = new CheckoutPage();

