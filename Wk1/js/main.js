/*
 Name:           Steve Drees
 Date:           2/4/2014
 Assignment:     The Duel - Part I
 */

(function(){

    var plrOneName = "Spiderman";                               //Define player ones name
    var plrTwoName = "Batman";                                  //Define player twos name
    var plrOneHlth = 100;                                       //Define player ones health
    var plrTwoHlth = 100;                                       //Define player twos health
    var plrOneDmg = 25;                                         //Define player ones max damage
    var plrTwoDmg = 25;                                         //Define player twos max damage
    var round = 0;                                                //Initial round set to 0

    function fight(){                                           //Fight function

        alert(plrOneName + ":" + plrOneHlth + "  *START*  " + plrTwoName + ":" + plrTwoHlth);

        for (var i = 0; i < 10; i++){
                                                                //Random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDmg1 = plrOneDmg * .5;                       //Player one min damage
            var minDmg2 = plrTwoDmg * .5;                       //Player two min damage
            var randomDmg1 = ~~(Math.random() * (plrOneDmg - minDmg1) + minDmg1);       //Random damage for player one
            var randomDmg2 = ~~(Math.random() * (plrTwoDmg - minDmg2) + minDmg2);       //Random damage for player two

            plrOneHlth -= randomDmg1;                           //Subtract random damage from player ones health
            plrTwoHlth -= randomDmg2;                           //Subtract random damage from player twos health

            console.log(plrOneName + ":" + plrOneHlth + " " + plrTwoName + ":" + plrTwoHlth);

            var result = winnerCheck();                         //Call winnerCheck function

            console.log(result);

            if (result === "no winner")
            {
                round++;
                alert(plrOneName + ":" + plrOneHlth + "  *ROUND " + round + " OVER" + "*  " + plrTwoName + ":" + plrTwoHlth);
            } else{
                alert(result);
                break;
            }
        }
    }

    function winnerCheck(){                                     //Winner check function
        var result = "no winner";
        if (plrOneHlth < 1 && plrTwoHlth < 1)
        {
            result = "You Both Die";                            //If they both player's die
        } else if(plrOneHlth < 1){
            result = plrTwoName + " WINS!!!";                   //Result for player one winning
        } else if (plrTwoHlth < 1)
        {
            result = plrOneName + " WINS!!!";                   //Result for player two winning
        }
        return result;                                          //winnerCheck
    }

    fight();

})();