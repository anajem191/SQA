function car(){
    this.colour="red";
    this.brand="BMW";
    this.input1=element(by.model('first'));//3m 3rfo 3l locator la awal input

    this.getModel = function(){
        console.log("Hello");
    };
};

//var a=new car();
//console.log(a.colour);
//a.getModel();

module.exports = new car();//la tsir accessible (global) by all other files