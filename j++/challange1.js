////////////////////////// Converting from Numbers to Romans ///////////////////

let convertToRomanNum = function(num){
    let numValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]  //array of number value
    let romanNum = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ]
    let romanized = ""

    for (let i = 0; i < numValue.length; i++){    // A for loop is used to loop through the of numValue.
        while (numValue[i] <= num){               // loop continues to run until it reaches the same value as num
            romanized += romanNum[i]              // then we tell numValue to stop at the same as romanNum array
            num -= numValue[i]                    // 
        }
    }
    return romanized
}

console.log(convertToRomanNum(110))