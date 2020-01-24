///////////////////// Global scope ////////////////////

let globalVar = "globalVar"
console.log(`Global Scope: ${globalVar}`)
//output will be: Global Scope: globalVar

let globalVar = "globalVar";
console.log(`Global Scope: ${globalVar}`);
//Output: Global Scope: globalVar

const callVar = () => {
console.log(`Inside function: ${globalVar}`);
//Output: Inside function: globalVar
}
callVar();

//////////////////////// Function Scope /////////////////

let globalVar = "globalVar";

console.log(`Global Scope: ${globalVar}`);

const callVar = () => {
    let localVar = "localVar"

    console.log(`Inside function: ${globalVar}`);      //This is the Function Scope
    console.log(`Inside function: ${localVar}`);
}

callVar();
console.log(`Global Scope with local variable: ${localVar}`);
//ReferenceError: localVar is not defined

///////////////////////// Scope Chain ///////////////////////

let globalVar = "globalVar";
console.log(`Global Scope: ${globalVar}`);

const outerFun = () => {
    let outerVar = "outerVar";
    console.log(`Outer function: ${globalVar}`);
    console.log(`Outer function: ${outerVar}`);
    console.log(`Inner function: ${innerVar}`); //ReferenceError: innerVar is not defined

        const innerFun = () => {
            let innerVar = "innerVar";
            console.log(`Inner function: ${globalVar}`);
            console.log(`Inner function: ${outerVar}`);
            console.log(`Inner function: ${innerVar}`);
        }
        innerFun();
}
outerFun();
innerFun(); //ReferenceError: innerFun is not defined (as it's inside outerFun())

//////////////////////// Block Scope ///////////////////////////

function startLet(){
    for (let i = 0; i < 5; i++){
        console.log(i); //Output: 0,1,2,3,4
    }
    console.log(i); //ReferenceError: i is not defined   // this is because 'let' only works when inside the function block
}
function startVar(){
    for (var i = 0; i < 5; i++){
        console.log(i); //Output: 0,1,2,3,4
    }
    console.log(i); //Output: 5   //because the loop to stopped at 5 the final output is 5. This only happens with 'var'
}
console.log("Running with let:");
    startLet();
console.log("Running with var:");
    startVar();

////////////////////////////////// High Order Function ///////////////////////////////

let whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
}
let greet = (time, fn) => {
    if(time < 1200){
        fn("Morning");
    } 
    else if (time > 1200 && time < 1800){
        fn("Afternoon");
    }
    else{
        fn("Evening");
    }
    }
    greet(1400, whichGreeting);

    ////////////////////////////////// High Order Function E.G 2 ///////////////////////////////

let add = (num1) => {
    return (num2) => {
        return num1 + num2;
        }
}
console.log(add(2)(1)); //output: 3
