/**
 * Created by wsdrees on 2/13/14.
 */

console.log("Dom stuff started");

//Self-executing function
(function(){

    //Need to know for test
    var big = document.querySelector("#big");
    var med = document.querySelector("#med");
    var btn = document.querySelector("button");

    btn.addEventListener("click",onClick);             //Listening for an event

    function onClick(e){
        big.innerHTML = "Kewl";                             //Changes the text inside your HTML
        med.innerHTML = "Pizza";
    }

}());

//  var big2 = document.getElementById("big");