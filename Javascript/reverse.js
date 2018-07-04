/*
*Author: Anani Oluseyi
*Description: Write a function that takes in a string as an argument
*and returns the reverse of the string.
*
*/
//Using vanila Javascript
function reverseStr(str){
    //Determines the number of characters in the string
    var strLength = str.length - 1;
    var result = "";
    //Loop through the string and at every iteration, reduce by 1;
    for(var i = strLength; i >= 0; i--){
        result += str[i];
    }
    return result;
}

console.log(reverseStr("Lagos is a very cool place to live in"));
console.log(reverseStr("I love to code"));

//Reverse function using built in Javascript methods
function reverseStr2(str){
    return str.split("").reverse().join("");
}

reverseStr2("Lagos");
