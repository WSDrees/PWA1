/**
 * Created by wsdrees on 2/25/14.
 */
(function(){

    Robot.weaponsList = ["Axe","Gun","Sword","Cat","Bare Hands","Laser"];
    function Robot(name){
        this.name = name;
        this.hand = "Right";
        this.weapon = "";
        this.setWeapon();
    }

    Robot.prototype.attack = function(){
        console.log("I am attacking you with my " +this.weapon+ ".");
    };

    Robot.prototype.setWeapon = function(){
        this.weapon = Robot.weaponsList[~~(Math.random()*Robot.weaponsList.length)];
    };

    window.Robot = Robot;

})();