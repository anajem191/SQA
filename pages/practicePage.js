const { element } = require("protractor");

function practicePage(){

    this.name = function(value){
        element(by.name('name')).sendKeys(value);
    };

    this.email = function(value){
        //element(by.css('input[class="form-control ng-untouched ng-pristine ng-invalid"]')).sendKeys(value);
        element(by.name('email')).sendKeys(value);
    };

    this.password = function(value){
        element(by.id('exampleInputPassword1')).sendKeys(value);
    };

    this.enableCheckbox = function(){
        element(by.id('exampleCheck1')).click();
    };
    
    // this.selectGender = function(){
    //     element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
    // };

    this.selectGender = function(value){

        if (value == 'Male'){
            element(by.cssContainingText("[id = 'exampleFormControlSelect1'] option", "Male")).click();
        }
        else if (value == 'Female'){
            element(by.cssContainingText("[id = 'exampleFormControlSelect1'] option", "Female")).click();
        };
    };

    this.employmentStatus = function(value){

        if (value == "Student"){
            element.all(by.name('inlineRadioOptions')).get(0).click();
        }

        else if (value == "Employed"){
            element.all(by.name('inlineRadioOptions')).get(1).click();
        };               
        
    };

    this.enterBirthday = function(value){
        element(by.name('bday')).sendKeys(value);
    };

    this.clickSubmitButton = function(){
        element(by.css("input[class*='btn']")).click();
    };

    this.assertSuccessMessage = function(value){
        element(by.css("div[class*='alert-success']")).getText().then(function(success){

            console.log(success);

            expect(success).toContain(value);
            //expect(success).toBe(value);

        })
    }

    this.ErrorName = function(error){
       expect(element(by.css("div[class='alert alert-danger']")).getText()).toBe(error);
    }

    this.Shop= function(){
       element(by.linkText('Shop')).click(); 
        // or/ element.all(by.css("a[class='nav-link']")).get(1).click();
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
// element(by.id('navbarResponsive')).element(by.css("a[class*='btn-primary']")).getText().then(function(number){
    //     console.log(number);
    //     expect(number).toMatch(value);
    // })

    });
  }  
    this.CheckOut= function(value){
        element(by.css("a[class='nav-link btn btn-primary']")).click();
    }
   
};


module.exports = new practicePage();
