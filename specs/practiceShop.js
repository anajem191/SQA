var using = require('jasmine-data-provider');
const { element, browser } = require('protractor');

describe('Practice Website', function() {

    var practicePage = require ('../pages/practicePage');

        it('Submitting ProtoCommerce Screen', function() {

            browser.get('https://rahulshettyacademy.com/angularpractice/');

         practicePage.Shop();
            
           practicePage.Add();
           practicePage.Add();
          // practicePage.assertCheckout('2');
          practicePage.assertCheckout('2');
           practicePage.CheckOut();

           //browser.sleep(5000);
            });
        })
  