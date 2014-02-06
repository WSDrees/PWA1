/**
 * Steve Drees on 2/4/14, Class 1.
 */
//FOR LOOPS
//var z = 0;
//for(var i = 0; i < 5; i++){         //Counting by 1's
//    z += i;
//}
//
//console.log(z);                     //Equals 10

//var z = 0;
//for(var i = 0; i < 20; i+=5){       //Counting by 5's
//    z += i;
//}
//
//console.log(z);                     //Equals 30

//for (var i=10; i>-1; i--){            //Countdown from 10
//    console.log(i);                   //10,9,8,7,6,5,4,3,2,1
//}


//FUNCTIONS
//function triangle(b,h){
//
//    var area = (.5 * b) * h;
//    return area;
//}
//
//var myTriangle = triangle(6,10);
//
//console.log("The area of my triangle is " +myTriangle);


var average = getAverage([10,20,30]);

function getAverage(arr){

    var total = 0;
    var avg = 0;

    for (var i=0; i<arr.length;i++){

        total+=arr[i];
    }
    avg = total/arr.length;
    return avg;

}

console.log(average);
console.log(getAverage([20,30,40]));                //OR