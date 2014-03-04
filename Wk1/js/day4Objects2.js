/**
 * Created by wsdrees on 2/11/14.
 */
(function(){

    var button = document.querySelector("#btn");
    var msg = document.querySelector("#pizza");



    button.addEventListener("click",onClick);

    function onClick(event){
//        console.log("You clicked me!")\
        msg.innerHTML = "BREAK TIME";
    }

//
//    var couch = {
//        color:"",
//        type:"",
//        price:0,
//        recline: function(){
//            console.log("I'm reclining")}
//    };
//
//
//
//    couch.color = "black";
//    couch.type = "3 seater";
//    couch.price = 100;
//
//
//    couch.recline();


//    for (var members in couch){
//        console.log(members + ":" + couch[members]);
//    }

//
//    var myDog = {
//        breed: "",
//        name: "Max",
//        bark: function(){
//            console.log("Woof!!!!");
//        }
//    };
//
//    myDog.breed = "Doberman Pincher";               //Dot syntax
//    myDog["name"]= "Fido";                          //Array access notation
//    myDog.bark();                                   //Calls the function
//
//    console.log(myDog.breed);
//    console.log(myDog["name"]);



})();