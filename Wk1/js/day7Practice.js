/**
 * Created by Steve Drees on 2/18/14.
 */

(function(){

    var grades = [{name: "Bob", grades:[30,46,53]},{name: "Scott", grades:[1,2,3]}];
    for(var i = 0; i<grades.length;i++){
       console.log(grades[i].grades);
    }

    //little easier to loop through an array .forEach
    grades.forEach(function(element){
      console.log(element.grades);
    });

    var dice = ~~(Math.random() * 11 + 2);

    //switch statement
    switch (dice){
        case 2:
            console.log("You rolled a 2");
            break;
        case 3:
            console.log("You rolled a 3");
            break;
        case 4:
            console.log("You rolled a 4");
            break;
        case 5:
            console.log("You rolled a 5");
            break;
        case 6:
            console.log("You rolled a 6");
            break;
        case 7:
            console.log("You rolled a 7");
            break;
        case 8:
            console.log("You rolled a 8");
            break;
        case 9:
            console.log("You rolled a 9");
            break;
        case 10:
            console.log("You rolled a 10");
            break;
        case 11:
            console.log("You rolled a 11");
            break;
        case 12:
            console.log("You rolled a 12");
            break;
        default:
    }

})();
//SCOPE
(function(){
    var food = "pizza";
    eat();
    console.log(drink);

    function eat(){
        console.log("lets eat "+food);
        var drink = "Coke";
    }



})();
//PATTERNS
(function(){

    var emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var btn = document.querySelector("button");
    var email = document.querySelector('#input');

    btn.addEventListener('click',onClick);

    function onClick(e){
        var pass = emailPattern.test(email.value);

        if (pass){
            console.log("Nice, you know how to type an email address");
        } else{
            console.log("sheesh");
        }
    }


})();