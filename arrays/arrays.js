let favouriteSong = [
    "alex - big for your boot",  //*NEEDS COMMA*
    "ben - 100 bags",
    "charlie - whatever is new"
];
// console.log(favouriteSong)

//what if [] are used

// let favouriteSongs = [
//     "alex - big for your boot",  
//     "ben - 100 bags",
//     "charlie - whatever is new"
// ];
// console.log(favouriteSongs[1])

//arrays can be updated like variables

// let coffeeOrder = [
//     "alex - cortado",
//     "ben - cortado",
//     "charlie - whatever's new"
// ];

// coffeeOrder[1] = "ann - Vanilla Latte"

// console.log(coffeeOrder);

// console.log(coffeeOrder[1]);

//what if i wanna add an item without having to use the square brackets in the console log

//use the .push method

// let coffeeOrder = [
//     "alex - cortado",
//     "ben - cortado",
//     "charlie - whatever's new"
// ];
// coffeeOrder.push("donna - esprrsso");
// console.log(coffeeOrder)

//what if you dont want useless information? use .pop (removes last one in the array)

let coffeeOrder = [
    "alex - cortado",
    "ben - cortado",
    "charlie - whatever's new"
];
coffeeOrder.pop();
console.log(coffeeOrder)

//create an array that has 3 of my favourite websites and
// then add another two once you’ve created the list.
// Then remove the last website.

let favouriteWebsite = [
    "YouTube.com",
    "Google.com",
    "Twitter.com"
];
favouriteWebsite.push("Facebook.com")
favouriteWebsite.push("Bing.com")
console.log(favouriteWebsite)

//now remove the last website

favouriteWebsite.pop();
console.log(favouriteWebsite)
//other methods can be done such as:

//Research on the following methods: shift(), unshift(),
// slice(), splice() (and many more). Create a program to
// demonstrate the uses of each method, some of these
// you may need more than one example. (Pay attention:
// not all methods would permanently updates/make
// changes to the arrays themselves.)

