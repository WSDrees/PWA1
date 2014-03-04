/**
 * Created by wsdrees on 2/13/14.
 */
(function(){
//
//    var objTest = person.skills[0].category;
//    console.log(objTest);

//    for(var fav in person.favorites){
//        //console.log(fav);
//        console.log(person.favorites[fav]);
//    }

for (var i=0; i<person.skills.length; i++){

        console.log(person.skills[i].category);

            for(var j=0; j<person.skills[i].tests.length; j++){

                console.log("Person's name: " + person.skills[i].tests[j].name + " Score: " + person.skills[i].tests[j].score);
            }
    console.log("******************************************");
    }

})();