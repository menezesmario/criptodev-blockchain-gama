"use strict";
let test;
let stringList = ['laranja', 'maçã'];
const currentDate = new Date;
function returnArray(newArray = []) {
    let i;
    let total = 9;
    for (i = 0; i < total; i++) {
        newArray.push(i);
    }
    console.log(newArray);
}
returnArray([]);
