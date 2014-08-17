/*
 Name:           Steve Drees
 Date:           3/1/2014
 Assignment:     Final
 */
(function () {
    var button = document.querySelector(".buttonred");
    var name = document.querySelector("#name");
    var address = document.querySelector("#address");
    var gpa = document.querySelector("#gpa");
    var date = document.querySelector("#date");
    var gpaAverage = document.querySelector("#gpaavg");
    var currentStudent = 0;
    var studentList = [];

//Students information in an Array
    function Student() {
        this.name = "";
        this.address = "";
        this.grades = "";
        this.date = calendar();
    }

    button.addEventListener('click', onClick);

    //Modify the constructor function Student average
    Student.prototype.average = function () {
        var total = 0;
        this.grades.forEach(function (a) {
            total += a;
        });
        return total / this.grades.length;
    };
//When button is clicked "onClick" event happens
    function onClick(e) {
        logData();
    }

//logData function, which adds new student
    function logData() {
        var stud1 = new Student;
        var stud2 = new Student;
        var stud3 = new Student;

        stud1.name = "Steve Drees";
        stud1.address = "2808 Summer Wind Dr. Winter Park, FL";
        stud1.grades = [3, 3.5, 4];
        stud1.average().toFixed(2);

        stud2.name = "David Miller";
        stud2.address = "5832 Auver's Blvd. Orlando, FL";
        stud2.grades = [3, 2.9, 3.8];
        stud2.average().toFixed(2);

        stud3.name = "Mary Ellen Drees";
        stud3.address = "1796 Virginia Ct. Tavares, FL";
        stud3.grades = [3.6, 3.1, 3.3];
        stud3.average().toFixed(2);

        studentList.push(stud1);
        studentList.push(stud2);
        studentList.push(stud3);

        date.innerHTML = calendar();

        name.innerHTML = "Name: " + studentList[currentStudent].name;
        address.innerHTML = "Address: " + studentList[currentStudent].address;
        gpa.innerHTML = "GPA: " + studentList[currentStudent].grades;
        gpaAverage = "GPA Average: " + studentList[currentStudent].grades.average().toFixed(2);
        console.log("Name: " + studentList[currentStudent].name);
        console.log("Address: " + studentList[currentStudent].address);
        console.log("GPA: " + studentList[currentStudent].grades);
        console.log("Date: " + calendar());
        console.log("GPA Average: " + average().toFixed(2));
        console.log("-------------------------------------------");

        currentStudent++;
        if (currentStudent >= studentList.length) {
            button.removeEventListener('click', onClick);           //Disable button
        }
    }

//Date function
    function calendar() {
        var myDate = new Date();
        var month = myDate.getMonth() + 1;
        var date = myDate.getDate();
        var year = myDate.getFullYear();
        return month + "/" + date + "/" + year;
    }

})();