//Part 1
class Vehicle{
 constructor (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
 }
 honk(){
    return 'Beep'
 }
 toString(){
    const {make, model, year} = this
    return ` This vehicle is a ${make, model} from ${year}.`
 }
}

//Part 2
class Car extends Vehicle{
constructor (make, model, year){
    super(make, model, year)
    this.numWheels = 4;
}
}

//Part 3
class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return 'VROOM!!!'
    }
}

//Part 4
class Garage{
constructor(capacity){
    this.capacity = capacity;
    this.vehicles = []
}
addVehicle(vehicle){
    if(this.vehicle.length >= this.capacity){
        return "Sorry, we're full.";
    }
    if(!(addVehicle instanceof Vehicle)){
        return "Only cehicles are allowed in here!";
    }
    this.vehicle.push(addVehicle);
    return "Vehicle added!";
}
}
