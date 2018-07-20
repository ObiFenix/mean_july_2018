class Bike {
    miles: number;
    constructor(
        public price: number,
        public max_speed: string
    ) { this.miles = 0; }
    displayInfo = () => {
        if (this.miles) console.log(`${this.price}, ${this.max_speed}, ${this.miles}`);
        else console.log(`${this.price}, ${this.max_speed}`);
        return this;
    }
    rider = () => {
        this.miles += 10
        console.log(`Riding: ${this.miles}\n`);
        return this;
    }
    reverse = () => {
        this.miles -= 5
        console.log(`Reversing: ${this.miles}\n`);
        return this;
    }

}

let bike1 = new Bike(200, '25mph');
let bike2 = new Bike(400, '40mph');
let bike3 = new Bike(730, '13mph');

bike1.rider().rider().rider().reverse().displayInfo()
bike2.rider().rider().reverse().reverse().displayInfo()
bike3.reverse().reverse().reverse().displayInfo()
