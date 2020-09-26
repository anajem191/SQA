//const { browser } = require("protractor");

const { protractor } = require("protractor/built/ptor");

 
//var Jasmine2Htmlreporter=require(protractor),

exports.config = {
  //framework:'jasmine',
   seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../specs/spec13.js'],


  // onPrepare : function() {
  // browser.driver.manage().window().maximize();

  // jasmine.getEnv().addReporter(
  //   new Jasmine2Htmlreporter({
  //   savePath: '../ReportFolder/screenshots',
  // takeScreenshots:true
  //  })
  //   );
  // }


};