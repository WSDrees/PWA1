/**
 * Created by wsdrees on 2/25/14.
 */
(function(){

    var interval = setInterval(update, 1000);

    var robot = new Robot("Justin");
    robot.hand = "Left";

    function update(){
        //robot.weapon = Robot.weaponsList[~~(Math.random()*Robot.weaponsList.length)];
        robot.setWeapon();
        robot.attack();
    }


})();