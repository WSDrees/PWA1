/**
 * Created by wsdrees on 2/25/14.
 */
(function(){
//******EXAMPLE 1********//
//var dog={name:"Max"};
//dog.color="black";
//dog.bark=function(){
//    console.log("Wuff");
//
//}
//dog.eat=function(){
//    console.log("Chow time");
//}
//
//
////capitalized name means its a constructor function. No difference, just a way to distinguish it.
//function Cat(){
//    console.log("cat created");
//
//}
//
//var scottsCat=new Cat();
//
//
//

    //******EXAMPLE 2********//
//    //create a constructor function
//    //parameters are color and age
//    function House(c,a){
//        this.color=c;//'this' will always point to that particular variable for any new objects that use this constructor. every object using this function will posses there own vairable if 'this' is used instead of var.
//        this.age=a;
//
//    }
//
//
//    var patricksHouse=new House('white',12);
//    var scottsHouse=new House('green',24);
//   // scottsHouse.color='blue';
//    console.log(scottsHouse.color);
//    console.log(patricksHouse.color);
//
//    //array for houses
//    var hood=[];
//
//    var colors=['red','blue','purple','green','orange','pink','brown','black','yellow','white','gray','neon'];
//
//    //create 1000 houses with a color and an age randomly
//    for(var i=0;i<1000;i++)
//    {
//        var color=colors[~~(Math.random()*colors.length)];
//        var house=new House(color, ~~(Math.random()*100+1));
//
//        //push the created house into the array hood
//       hood.push(house);
//
//    }
//function listHouses()
//{
////    for (var i=0; i<hood.length; i++)
////    {
////        console.log(hood[i].color, hood[i].age);
////    }
//
//
//    var counter=0;
//    //'for each' loop instead of for loop
//    //e is element in the array house. the parameter e is house.
//    //this will display 1000 times as there are 1000 house elements in the array hood
//    hood.forEach(function (e)
//    {
//        counter++;
//        console.log(counter, e.color, e.age);
//
//    })
//
//}
//
//    console.log(hood[23].color);
//

    //******EXAMPLE 3********//
function Car()
{
    this.color='';
    this.doors='';
    this.price=0;
}

var myCar=new Car();//instantiate a new car object
myCar.price=20000;
var pCar=new Car();
pCar.price=10000;

var cars=[myCar, pCar];

console.log(cars[0], cars[1]);




})();
