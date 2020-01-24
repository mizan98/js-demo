// const sandwhichOrder = (topping1, topping2, topping3, topping4, topping5) => {
//     console.log(`sub sandwich order is ${topping1}, ${topping2}, ${topping3}, ${topping4} and finally ${topping5}`)
// }
// sandwhichOrder ("jalapenos", "cheese", "lettuce", "tomatoes", "cucumber")

// // let nameOrder = [
// //     "jimmy",
// //     "john",
// //     "jude",
// // ]

// // nameOrder.push[0]("jill")
// // console.log(nameOrder)

// //Generate 6 random numbers between 1-50
// for (i = 0; i < 6; i++){
//     console.log(Math.random() * 49 + 1)
// }
// //or

// for (i = 0; i < 6; i++ ){
//     Math.random() * 49 + 1
// }

// //making loops

// let favouriteDrinks = [
//     "coke",
//     "fanta",
//     "tonic",
//     "red bull"
// ]
// for (let drinksIndex=0; drinksIndex<favouriteDrinks.length; drinksIndex++){
//     console.log(favouriteDrinks[drinksIndex])
// }

// let favouriteFilms = [
//     "inception",
//     "BatmanvsSuperman",
//     "interstellar",
//     "your name",
//     "coco"
// ]

// for (let i=0; i < favouriteFilms.length; i++){    //the i stands for index which is better than writing favouriteFilmindex
//     console.log(favouriteFilms[i])                //
// }

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Heart";

// while(currentCard != "Spade"){

// console.log(currentCard);
// currentCard = cards[Math.floor(Math.random()*4)];     //it is starting off on the current card and cycling through till it reaches the "while" crad which is spades

// }

// console.log(currentCard);

//create an array that checks if the 3rd film is ghostbusters
let films = [
    'goonies',
    'terminator',
    'rambo',
    'ghost busters'
]
for (let i = 0; i < films.length; i++){
console.log(films[i])
}


var check = 'ghost busters'
const filmCheck = (filmsinput) => {  //films becomes filmsinput after going through function in line 82
    if (check == filmsinput[3]){
        console.log(`yey it's ${filmsinput[3]}`)
    }
    else {
        console.log(`boo, we want ${filmsinput[3]}`)
    }
}   
filmCheck(films)
