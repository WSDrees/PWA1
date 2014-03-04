/*
 Name:           Steve Drees
 Date:           2/6/2014
 Assignment:     Goal2_assign_jspractice
 */
// self-executing function
(function(){
/*******************************************

     STUDENTS ASSIGNMENT
     1.  create a function named 'avgNumbers'
     - accept 1 parameter into the function that will be an array of unlimited numbers
     - find the average of all the numbers
     - return the average from the function
     - console.log the answer outside of the function

     2.  create a function named 'fullName'
     - accept 2 parameters into the function that are strings (firstName and lastName)
     - return the name after it has been concatenated
     - console.log the answer outside of the function

     3.  create a function named 'wordCount'
     - accept 1 parameter into the function that is a long string of text words
     - create a function that counts all the words and return the answer
     - console.log the answer outside of the function

     4.  create a function named 'charCount'
     - accept 1 parameter into the function that is a long string of text
     - return length of the array of string characters
     - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
     - accept 1 parameter into the function that is a a one word string
     - return the number of vowels in the word
     - console.log the answer outside of the function

     6.  create a function named 'findNum'
     - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
     - if the second parameter being passed is "false" or null then
     - create an array with all of the odd numbers from the array
     - else - create an array with all of the even numbers from the array
     - return the array
     - console.log the answer outside of the function
 ********************************************/
console.log('------ Goal2: Assignment: JavaScript Practice ----------');

console.log("1. avg of an array of numbers");

    function avgNumbers(arr){

        var total = 0;

        for (var i=0; i<arr.length;i++){

            total += arr[i];
        }
        return total/arr.length;

    }
    var average = avgNumbers([1,2,3,4,5]);
    console.log('avg number = '+ average );

//--------------------------------------------------------
    console.log("2. concat first and last name");

    var firstName = prompt("What is your first name?");             //User inputs their first name
    var lastName = prompt("What is your last name?");               //User inputs their last name

    function fullName(firstName,lastName){

        return("Your name is: " +firstName+ " " +lastName+ ", have a good day!");
    }

    console.log(fullName(firstName,lastName));

    console.log(fullName('James', 'Bond'));

//--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function";

    function wordCount(ipsum){
        var splitString = ipsum.split(" ");
        return splitString.length;

    }

    console.log(wordCount(ipsum));

//--------------------------------------------------------
    console.log("4. sentence char count");

    var word = prompt("Enter a word:");

    function charCount(word){

        return word.length;

    }

    console.log(charCount(word));

//--------------------------------------------------------
    console.log("5. how many vowels in a word");

    function vowelsInWord(word){

       var vowels = "AaEeIiOoUu";
       var count = 0;

            for(i = 0; i < word.length ; i++)
            {
                if (vowels.indexOf(word[i]) !== -1)
                {
                    count += 1;
                }

            }
            return count;
        }

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------

    console.log("6. find number and create an array of even or odd numbers");



    function findNum(number, boolean){

        var oddNumber = [];
        var evenNumber = [];

        for(i = 0; i<number.length; i++)
        {
            if(boolean == false){
                if (number[i] % 2 == 1)
                {
                    oddNumber.push(number[i]);

                } else if(number[i] % 2 ==0)
                {
                    evenNumber.push(number[i]);
                }
            }
        }

        return oddNumber + "\n" +evenNumber;
    }

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();