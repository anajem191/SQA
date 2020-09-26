function SuperCalculator(){
    
    this.input1=element(by.model('first'));

    this.input2=element(by.model('second'));

    this.goButton=element(by.id('gobutton'));

    //this.input4=element(by.css("td:nth-child(3)"));

    this.CountRows=function(){element.all(by.repeater('result in memory')).count().then(function(result){//.then is to deal with the promise
        console.log(result);});

    this.LoopAndAssert= function(){
        var sum= ['15','12','10'];
        var i = 0;        

        element.all(by.repeater('result in memory')).each(function(answer){

            answer.element(by.css("td:nth-child(3)")).getText().then(function(result){

                console.log(result);
                expect(result).toBe(sum[i]);
                i = i + 1;
            });

        });
            }
    };

   //this.getRes = function(result){
    //console.log(result);
};

module.exports = new SuperCalculator();