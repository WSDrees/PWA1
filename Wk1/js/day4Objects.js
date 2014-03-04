/**
 * Created by wsdrees on 2/11/14.
 */

console.log("Objects");
(function(){

    //var car = ["Lexus","Toyota","RX-330"];
    var student1 = {name:"Patrick",grades:[80,90,100],address:{street:"Ocean",city:"Orlando",state:"FL"}};
    var student2 = {name:"Dave",grades:[10,20,30],address:{city:"Syracuse",state:"NY"}};

    for(var prop in student1){
        console.log(prop + ":" + student1[prop]);

    }

    var students = [student1,student2];

//    var avg1 = getAverage(students[0].grades);
//    var avg2 = getAverage(students[1].grades);
//    console.log(avg1);
//    console.log(avg2);

    console.log(studentsAvg(students));

//****ON THE TEST*****
    function logData(){


    }

//    var city = student1.address;
//    console.log(city);

    function getAverage(arr){
        var total = 0;

        for(var i=0; i<arr.length; i++){
            total+=arr[i];
        }
        return total/arr.length;
    }

    function studentsAvg(arr){
        var avg = [];
        var num = 0;

        for(var i=0; i<arr.length; i++){

            num = getAverage(arr[i].grades);
            avg.push(num);

        }
        return avg;
    }

//    var avg = getAverage(student.grades);
//
//    console.log(avg);

})();

//var carAgain = {name:"Lexus",make:"Toyota",model:"RX-3300"};        //make,name,model are properties  "property:value"
//
//
//var make = car[1];
//
//var objMake = carAgain.make;                                        //Object.property Use dot syntax
//
//console.log(objMake);