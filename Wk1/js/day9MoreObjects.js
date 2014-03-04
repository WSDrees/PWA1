/**
 * Created by Steve Drees on 2/25/14.
 */

(function(){

    var interval = setInterval(update,1000);                //JavaScript will update every second
    var seconds = 0;

    document.querySelector("#button").addEventListener("click", onClick);
    document.querySelector("#displayAvg").addEventListener("click",display);
    var studentList = [];

    function onClick(e){
        var student = new Student();
//      var input = document.querySelector("#input").value;             OR
        student.name = document.querySelector("#nameInput").value;
        student.grades.push(parseInt(document.querySelector("#gradeInput1").value));
        student.grades.push(parseInt(document.querySelector("#gradeInput2").value));
        studentList.push(student);
    }

    function display(e){
        studentList.forEach(function(ele){          //For each loop
            console.log(ele.name,ele.average());
        });
        clearInterval(interval);                    //Stop the interval
    }

    function update(){                              //Automatically calls the function every second
        seconds++;
        console.log(seconds);
    }
//  console.log(studentList[0].average());
//    Array.prototype.push = function(){      //Modified the push object of the array
//        console.log("You SUCK!");
//    };
})();

