//create class bike
//with price, max_speed, miles=0
//make 3 bikes
//use constructor
//displayInfo(), ride(), reverse()

class Bike {
    miles: number;
    constructor(
        public price: number,
        public max_speed: string,
    ) { this.miles = 0 }
    displayInfo() {
        console.log('Price: ' + this.price + ' Max Speed: ' + this.max_speed + ' Miles: ' + this.miles);
        return this;
    }
    ride() {
        console.log('Riding *** miles +10 ***');
        this.miles += 10;
        return this;
    }
    reverse() {
        if (this.miles == 0) { return this; }
        else {
            console.log('Reversing *** miles -5 ***');
            this.miles -= 5;
            return this;
        }
    }
}

let bike1 = new Bike(200, '25mph');
let bike2 = new Bike(150, '15mph');
let bike3 = new Bike(201, '88mph');

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();