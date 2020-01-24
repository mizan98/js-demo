// if (1 === "1") {
//     console.log(true)
// }
// else {
//     console.log(false)
//}
//1 is equal to 1 so nothing else different which means it is false
// if (1 != "1") {
//     console.log(false)
// }
// else {
//     console.log(false)
//}
 //if age is greater than 17, 'perfect'. if less than 17 then 'no not serve'
 //create variable age
 //construct if/else syntax
let age = 20
let country = 'uk'
if (age > 17) {
    console.log("perfect")
}
else {
    console.log("too young mate")
}

if (age > 17 && country == 'uk') {
    console.log("check again")
}
else {
    console.log("wicked")
}

//switch syntax

const grade = 87

switch (true) {
    case grade >= 70:
        console.log ('distinction')
        break;
    case grade >= 60:
        console.log('merit')
        break;
    case grade >= 50:
        console.log('pass')
        break;
    default:
        console.log('failed')
}
//creating  a password that is 8 chracaters or shorter to give diff outcomes
let password = "vhsjwsbfhjsfbdsbhfdbdsvhjds"
let pslength = password.length;
if (pslength < 8){
    console.log ("password is shite")
}
else {
        console.log(password);
    }
//create a variable called num, check if num is divisable by 3 or 5
var num = 11
if (num % 3 === 0 || num % 5 === 0){
    console.log("this number is divisable by 3 and 5")
}
else{
    console.log("this number is not divisable by 3 or 5")
}
//create a switch method of said number
var num =  12
switch (true) { //use true to allow the computer to calculate values
    case num % 3 === 0:
        console.log("number is divisable by 3");
        break;
    case num % 5 === 0:
        console.log("this number is divisable by 5")
        break;
    default:
    console.log("this number is not divisable by 5 or 3")
}

//if number is divisable by 3 log "fizz" if its divisable by 5 log "buzz"

//challange 4: number palindrome. check if number is palindrome

//if divisable by 3 log 'fizz'
//if divisable by 5 log 'buzz'
//if both 3 and 5 log 'fizzbuzz'

var num =  15
switch (true) { //use true to allow the computer to calculate values
    case num % 3 === 0 && num % 5 === 0:
        console.log("fizzbuzz")
        break;              //break means programme will stop if the right answer is found..so will always be fizz with 15 unless i switch fizzbuzz with fizz
    case num % 5 === 0:
        console.log("buzz")
        break;
    case num % 3 === 0:
        console.log("fizz");
    default:
    console.log(num)
}

// Create a variable called time, a variable called
// placeOfWork and a variable called townOfHome.
// Create an if statement that logs to the console
// where someone is at times of the day. E.g. if the time
// is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.



let numberPali = 1001
//convert number to string 

const numberpaliString = numberPali.toString();

console.log(typeof numberPali)
console.log(typeof numberpaliString)

//split numbers

const splitNumber = numberpaliString.split(""); //split only done on strings hence converting number to string
console.log(splitNumber)
const reverseNumber = splitNumber.reverse(); //reverse only applies to arrays which happens to string after split
console.log(reverseNumber)

//to rejoin string do the following

const joinNumber = reverseNumber.join("")
console.log(joinNumber)

//test the number to see what tyoe it is
console.log(typeof joinNumber)





