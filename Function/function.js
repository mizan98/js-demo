// const pressGrindbeans = () => {
//     console.log('Grinding for 30 secinds')
// }
//

let coffeeIsGrinding = false;

const pressGrindbeans = () => {
    if (coffeeIsGrinding) {// we know its false because its declared as false 
        console.log('stop the grind')
        coffeeIsGrinding = false;
    } 
    else {
        console.log('start the grind') // however it is transformed in here
        coffeeIsGrinding = true; 
    }
}
pressGrindbeans(); //would give 'start the grind' as coffeeIsGrinding is transformed into true

//functions with parameteres e.g

const area = (width, length) => {
    return width * length; //return is use to return width, length to console log to covert to numbers 
}

console.log(area(3,4));

//another example

const addUp = (num1, num2) => {
    return num1 + num2;
}
console.log(addUp (3, 50))

// const roomArea1 = area(2, 4)
// console.log('the area of the room is', roomArea1)

//another example without parameters

// const takeOrder = (size, drinkType, place) => {
//     console.log(`order recieved: ${size} ${drinkType} from ${place}`)
// }
// takeOrder('small', 'Frappuccino', 'costa')

// const todayWeather = (weather) => {
//     console.log(`today is ${weather}`)
//     takeOrder('small', 'Frappuccino', 'costa') //can add previous function to this one too
// }

// todayWeather('sunny')

//so what i have done is by creating a function i have made it simpler to generate an example without having to re-type the code i.e. the take order along with todays weather
 //diffewrent ways to create a function

 function square(number) {
     return number * number;
 };

 console.log(square(5));

 // transform this function into arrow function
// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//     return 1;
//     } else {
//     return (n * factorial(n-1));
//     }
// }
// console.log(factorial(33)); 

//turn into arrow function below:

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));  // 33 * ( 32 *  ) keeps looping as factorial keeps getting (-1) until it reaches the 'if' value of 1 or 0
    }
}

console.log(factorial(33));

//activity 1

// Here's an example of a function that includes a parameter.
// Parameters are responsible for functions being able to work on
// different data inputs. Edit the snippet below to include two
// parameters and a running order count updated when the
// function is called :

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}.`);
    orderCount = orderCount + 1;                            //ordercount is increased by 1 everytime it is order
    //can also be typed as orderCount++; (only for 1 addition but if adding by more thsn 1 use orderCount += 5
    console.log(`order count is ${orderCount}`)
    
}

takeOrder("chicken", "jalapenos");
takeOrder("meat", "extra cheese");

//Cash machine time. Let’s create one that :

// dispenses cash if your pin number is correct and your balance is
// equal to, or more than, the amount you’re trying to withdraw.

//can use ifelse
//can use switch

// let pinNumber = 1234
// let cashBalance = 500
// const withdrawCash = (pin, request) => {
//     if (pin == pinNumber && request <= cashBalance){
//        console.log(`${pinNumber} is correct. Here is your balance ${cashBalance}`)
//        cashBalance = cashBalance - request 
//     }
//     else if(pin == pinNumber && request > cashBalance) {
//         console.log("sorry you're broke")
//     }
//     else {
//         console.log('pin is incorrect')
//     }
// }

// withdrawCash(1234, 5000)

// let balance = 1000;

// const withDrawCash = (cash) => {
//     let newBalance = balance - cash;
//     return(newBalance)
// }
// withDrawCash(200);
// console.log(newBalance)

//scopes 

let pizzaTopping = "ham"  //because it isnt in a scope it is a global scope
console.log(`pizzaTopping before the order is ${pizzaTopping}`)

const pizzaOrder = () => {
    let pizzaTopping = "cheese";     //because this is inside of a function, the variable can be named the same but is a new variable because its a function scope
    console.log(`pizzaTopping inside of function is ${pizzaTopping}`)
}

console.log(`pizzaTopping after order is ${pizzaTopping}`)
pizzaOrder();
console.log(`pizzaTopping after function run is ${pizzaTopping}`) 

//this creates 2 different responses 1 with the array with outside variable and one with the modified function variable so basically 4 responses altogether