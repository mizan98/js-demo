// let drinkAvailable = [
//     "Fanta",
//     "sprite",
//     "lemonade",
//     "juice",
//     "ribena"
// ]
// let balance = 10.00
// let cost = [
//     1.00,                      
//     2.00,
//     0.90,
//     6.00,
//     2.00
// ]
//  const drinkCheck = (drink) => {
//     for(i = 0; i<drink; i++){
//         if(drink == drink[i]){
//             drinkIndex = i;
//             return'goodtaste';

//         }
//     }
//     return 'bad taste'
//  }
// const newBalance = (costOfDrink, remainingBalance) => {
//     return balance = remainingBalance - costOfDrink
// }

// const buyingDrink = (drink, money) => {
//     drinkCheck
// }

// //teacher example

// let balance = 10.00;
// const drinkCheck = (drinkChosen) =>{
//     if (drinkChosen == "chocolate"){
//         return true;
//     }else{
//         return false;
//     }
// }
// const balanceCheck = (cost) => {
//     if(cost <= balance){
//         return true;
//     }else{
//         return false;
//     }
// }
// const goodtaste = (drink, cost)=>{
//     if ((drinkCheck(drink))&&(balanceCheck(cost))){
//         return "You're in for a good time";
//     }else{
//         return "Come back later!";
//     }
// }
// console.log(goodtaste("chocolate",8.00));
// console.log(goodtaste("coffee",5.00));


//objects
// let day = "saturday"
// let alarm;
// let person = {      
//     name: "mizan",
//     age: 21,                             //this is method in a object
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am",
//     favouriteMusic: "anime intros",
//     sayHi (){
//         if(this.name) 
//         return `Hello, my name is ${person.name}`
//     }
// }
// closeCafe (){
//     return "do one"
// }
// console.log(person.sayHi())

// if(day == "saturday" || "sunday"){
//     alarm = person.weekendAlarm    //by putting "weekenAlarm" this pulls that string from the person object only
//     console.log(alarm)
// }
// else{
//     alarm = person.weekdayAlarm
//     console.log(alarm)
// }

// //to add an object do this...

// person.music = ["song1", "song2", "song3"]
// console.log(person)

//practice example

// let time = "morning"
// let day = "weekday"
// let place;             //can call place whatever we want because of the objects inside
// let person = {
//     name: "mizan",
//     age: 21,
//     action: "ready for work",
//     action2: "you should be at WORK",
//     action3: "rest easy..",
//     action4: "fried eggs for lunch",
//     action5: "you alive or??"
// }
// if (time == "morning" && day == "weekday"){
//     place = person.action
//     console.log(place)
// }
// else if (time == "afternoon" && day == "weekday"){
//     place = person.action2
//     console.log(place)
// }
// else if (time == "morning" && day == "weekend"){
//     place = person.action3
//     console.log(place)
// }
// else if (time == "afternoon" && day == "weekend"){
//     place = person.action4
//     console.log(place)
// }
// else {
//     place = person.action5
//     console.log(place)
// }


// //using functions in objects

// let offer = "none";
// let time = 1200;
// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: ["Cappuccino","Latte","Filter coffee","Tea","Hot chocolate"],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer”,
//     openCafe:()=>{
//         return "Come on in";
// },
// closeCafe:()=>{
// return "We are closed, come back tomorrow!"
// };

// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());

//this will not work as a 'this. function is required to tell the function where special offers is

//this. means it is in my current object

let offer = "none";
let time = 1200;
const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: ["Cappuccino","Latte","Filter coffee","Tea","Hot chocolate"],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry no offer",
    openCafe(){
        if(this.hasSpecialOffers){
            return "Time for a special offer!";
}
},
closeCafe(){
    return "We are closed, come back tomorrow!";
}
};

console.log(cafe.openCafe())


const pet = {
    name: "doggo",
    typeOfPet: "husky",
    age: "1",
    colour: "white",
    hungry: true,
    thirsty: true,
    typeOfFood: [
        "meat",
        "dog food",
        "water",
    ],
    eat (){
        if(this.hungry){
            return `${this.name} is hungry please feed him ${this.typeOfFood[0]}`    //things in functions require 'this.'
        }
    },
    drink(){
        if(this.thirsty){
            return `also he is thirsty please get a bowl ready with ${this.typeOfFood[2]}`
        }
    }
}

console.log(pet.eat(), pet.drink())

//Create an object called coffeeShop with key values of:

// branch, drinks with prices, food with prices

// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is ... with
// all items chosen with costs, and the total cost.

const coffeShop = {
    branch: "starbucks",
    drinksWithPrices: [
        "coffee"
    ]
    }


