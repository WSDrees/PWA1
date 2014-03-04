/**
 * Created by Steve Drees on 2/6/14.
 */
//Self executing function
//(function(){                                //No name function
//    console.log("hello folks!");
//
//    function hello(){
//        console.log("hello");
//    }
//
//    hello();
//
//})();                                       // () invocation of the function


//var helloWorld1 = function(){             //Anonymous Function
//
//};
//
//function helloWorld2(){                   //Named Function
//
//}
//
//helloWorld1();
//helloWorld2();

//(function(){
//
//    var name = "bob";
//    console.log("name",name);
//
//})();

(function(){            //charAt - indexOf() - length - split() - substr() - substring()

    var name = "Full Sail University";      //0 base indexing
    var l = name.charAt(10);                //Returns the character at a specified index
    var r = name.indexOf("S");
    var t = name.length;
    var piece = name.substr(5,4);           //Start at a point in the string, Length of the string you want
    var anotherPiece = name.substring(5,9);

    console.log(piece);
    console.log(anotherPiece);

    var splitTest = "I Love JavaScript much!";
    var words = splitTest.split(" ");           //Splitting the string up into an array

    console.log(splitTest);                 //Original string
    console.log(words);                     //Separate words split()
    console.log(words[2]);                  //Gets specific items from the string

    var greetings = "Hello World!";

    console.log(greetings.substr(0,4));
    console.log(greetings.substring(6,9));

})();