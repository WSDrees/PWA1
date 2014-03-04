/**
 * Created by wsdrees on 2/15/14.
 */
var person = {name:"Ortiz", address:{city:"Orlando",state:"FL"},date:""};
var months = ["jan","feb","march","april","may","june","jul","aug","sept","oct","nov","dec"];

var people = [person];

console.log("orig. data");
logStuff();
addPerson("dave","Winter Park","FL");

console.log("new person added");
logStuff();



var myButton = document.querySelector("#btn");

myButton.addEventListener("click",onClick);

function onClick(e){
    logStuff();
}



function logStuff(){
    for(var i = 0; i<people.length; i++){
        console.log("person's name:"+ people[i].name);
        console.log("Address: " +people[i].address.city+","+people[i].address.state);
        console.log("-------------------------------------------");
    }

}


function addPerson(n,c,s){
    var obj = {name:n, address:{city:c,state:s}, date:new Date()};
    people.push(obj);

}

var myDate = new Date();
console.log(myDate);

var month2 = months[myDate.getMonth()];

var month= myDate.getMonth()+1;
var date = myDate.getDate();
var year = myDate.getFullYear();
var day = myDate.getDay();

var coolDate = month+"/"+date+"/"+year;

person.date=coolDate;

console.log(person);