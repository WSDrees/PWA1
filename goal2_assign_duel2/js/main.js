/**
 * Created by wsdrees on 2/11/14.
 */
/*
 Name:           Steve Drees
 Date:           2/4/2014
 Assignment:     The Duel - Part I
 */

(function(){

    var plrOne = ["Spiderman", 100, 50];        //Define player ones name, health, and damage max
    var plrTwo = ["Batman", 100, 50];           //Define player twos name, health, and damage max
    var round = 0;                              //Initial round set to 0

    function fight(){                                           //Fight function

        alert(plrOne[0] + ":" + plrOne[1] + "  *START*  " + plrTwo[0] + ":" + plrTwo[1]);

        for (var i = 0; i < 10; i++){
            //Random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDmg1 = plrOne[2] * .5;                       //Player one min damage
            var minDmg2 = plrTwo[2] * .5;                       //Player two min damage
            var randomDmg1 = ~~(Math.random() * (plrOne[2] - minDmg1) + minDmg1);       //Random damage for player one
            var randomDmg2 = ~~(Math.random() * (plrTwo[2] - minDmg2) + minDmg2);       //Random damage for player two

            plrOne[1] -= randomDmg1;                           //Subtract random damage from player ones health
            plrTwo[1] -= randomDmg2;                           //Subtract random damage from player twos health

            console.log(plrOne[0] + ": " + plrOne[1] + " " + plrTwo[0] + ": " + plrTwo[1]);

            var result = winnerCheck();                         //Call winnerCheck function

            console.log(result);

            if (result === "no winner")
            {
                round++;
                alert(plrOne[0] + ":" + plrOne[1] + "  *ROUND " + round + " OVER" + "*  " + plrTwo[0] + ":" + plrTwo[1]);
            } else{
                alert(result);
                break;
            }
        }
    }

    function winnerCheck(){                                     //Winner check function
        var result = "no winner";
        if (plrOne[1] < 1 && plrTwo[1] < 1)
        {
            result = "You Both Die";                            //If they both player's die
        } else if(plrOne[1] < 1){
            result = plrTwo[0] + " WINS!!!";                   //Result for player one winning
        } else if (plrTwo[1] < 1)
        {
            result = plrOne[0] + " WINS!!!";                   //Result for player two winning
        }
        return result;                                          //winnerCheck
    }

    fight();

})();