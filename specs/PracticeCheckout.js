var using = require('jasmine-data-provider');
const { element, browser } = require('protractor');

describe('Practice Website', function() {

    var CheckoutPage = require ('../pages/CheckoutPage.js');
     
        it('Submitting ProtoCommerce Screen', function() {

            browser.get('https://rahulshettyacademy.com/angularpractice/');

             CheckoutPage.Shop();
             CheckoutPage.Add();
             CheckoutPage.Add();
          CheckoutPage.assertCheckout('2');
          CheckoutPage.CheckOut();
          CheckoutPage.CheckoutFinal();
     
          CheckoutPage.country("be");
          CheckoutPage.ChooseC();

         // CheckoutPage.Purchase();
          //CheckoutPage.AgreeCheckbox();
           browser.sleep(5000);
            });
        })
    