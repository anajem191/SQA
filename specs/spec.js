describe('Users Management', function() {
    it('Open Angularjs Website', function() {
      browser.get('https://angularjs.org');
      element(by.model('first')).sendKeys(3);
    });
    browser.sleep(10000);
});
    