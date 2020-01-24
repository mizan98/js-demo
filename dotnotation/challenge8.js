// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the
// sum is even. If it is return the number, otherwise return
// the numbers multiplied together.

let num1 = 10
let num2 = 15
let sum = num1 + num2

function isEven(sum) {
	if (sum % 2 == 0){     //if the sum divided by 2 is even then even but odd numbers never divide into even
        console.log("number is even")
    }
		
	else
		console.log("number is odd");
}
isEven(sum)