function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log("My ninja name is " + this.name);
    }
    this.showStats = function(){
        console.log("Name:" + this.name, "Health:" + this.health, "Speed:" + speed, "Strength:" + strength);
    }
    this.drinkSake = function(){
        this.health += 10;
        console.log(this.health);
        return this;
    }
}
// Ninja.prototype.speed = 3;
// Ninja.prototype.strength = 4;
strength = 3;

Ninja.prototype.punch = function(opponent){
    this.health -= 5;
    console.log(opponent.name + " was punched by " + this.name + "and lost 5 Health!")
}
Ninja.prototype.kick = function(opponent){
    this.health -= 15*strength;
    var lost = 100 - this.health;
    console.log("In this case, " + this.name + " lost " + lost + " health because " + opponent.name + " has " + strength + " points of strength.");
}


var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
console.log(blueNinja instanceof Ninja);
redNinja.kick(blueNinja);