class Car{
    acceleration: number = 0;
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    honk():void {
        console.log(`${this.name} is saying: Tooooooooot!`);
    }

    accelerate(speed: number):void {
        this.acceleration = this.acceleration + speed;
    }  

}
var car = new Car('BMW');
car.honk();
console.log(car.acceleration);
console.log(car.accelerate(60));
console.log(car.acceleration);
