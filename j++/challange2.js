// Use the flow diagram given on previous page, write
// a program (using html, prompt and alert), for the
// user to give their birthdate and return the day of
// week when the user was born.

let birthday = parseInt(prompt("Please enter birth day"));
let birthMonth = parseInt(prompt("Please enter your birth month"));
let birthYear = parseInt(prompt("Please enter your birth year"));

    if (birthMonth < 3){
        birthMonth = birthMonth + 12;
        birthYear = birthYear - 1;
    };

let f = Math.floor(birthYear/100)
let l = birthYear - 100*f

let s = Math.floor(2.6* - 5.39) + (Math.floor(l/4) + (Math.floor(f/4)) + birthday + l - 2*f)

let x = s - (7*Math.floor(s/7))

alert (x)

