/**
 * Created by wsdrees on 2/25/14.
 */

(function(){

    function Student(){                     //Constructor function
        this.name = "";
        this.studentID = "";
        this.degree ="";
        this.grades = [];
    }
    //Modify the constructor function Student average
    Student.prototype.average = function(){
        var total = 0;
        for(var i=0;i<this.grades.length; i++){
            total += this.grades[i];
        }
        return total/this.grades.length;
    };
    window.Student = Student;
})();