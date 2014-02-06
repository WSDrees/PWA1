/*
    Name:           Steve Drees
    Date:           2/4/2014
    Assignment:     The Duel - Part I
*/

(function(){

    var plrOne = "Spiderman";               //Player ones name
    var plrTwo = "Batman";                  //Player twos name
    var plrOneHlth = 100;                   //Player ones health
    var plrTwoHlth = 100;                   //Player twos health
    var plr1Dmg = 50;                       //Player ones max damage
    var plr2Dmg = 50;                       //Player twos max damage
    var round=0;                            //Round 1 set to 0

    function fight(){

        alert(plrOne + ":" + plrOneHlth + " *START*  " + plrTwo + ":" + plrTwoHlth);

        for (var i = 0; i < 10; i++)
        {
            var minDmgOne = plr1Dmg * .5;                                       //Player one minimum damage
            var minDmgTwo = plr2Dmg * .5;                                       //Player two minimum damage
            var fightOne = ~~(Math.random()*(plr1Dmg-minDmgOne)+minDmgOne);     //Random amount of damage for player one
            var fightTwo = ~~(Math.random()*(plr2Dmg-minDmgTwo)+minDmgTwo);     //Random amount of damage for player two
            plrOneHlth -= fightOne;                                             //Subtract damage from player one
            plrTwoHlth -= fightTwo;                                             //Subtract damage from player two

            console.log(plrOne + ":"+ plrOneHlth + " " + plrTwo + ":" + plrTwoHlth);

            var result = winnerCheck();                                         //Call winnerCheck function

            console.log(result);

            if (result === "No Winner")
            {
                round++;
                alert(plrOne + ":" + plrOneHlth + " *ROUND " + round + " OVER" + "* " +plrTwo+ ":" + plrTwoHlth);

            } else{
                alert(result);
                break;
            }
        }
    }

    function winnerCheck(){                             //winnerCheck function
        var result = "No Winner";                       //No Winner result

        if (plrOneHlth<1 && plrTwoHlth<1)               //If both player's die
        {
            result = "You Both Die";
        } else if(plrOneHlth<1){                        //Player two wins
            result =plrTwo+" WINS!!!"
        } else if (plrTwoHlth<1)                        //Player one wins
        {
            result = plrOne+" WINS!!!"
        }
       return result;
    }

    fight();                                            //Fight starts automatically

})();