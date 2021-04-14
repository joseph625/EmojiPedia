import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import emoji from './emojipedia'

ReactDOM.render(
    <App /> ,document.getElementById("root")
)

var e= emoji.map( a =>  a.detail.substring(0 ,100))

// var e= emoji.map( a => {
//        return a.detail.substring(0 ,100)
// })

console.log(e);


var numbers=[3, 56, 2, 48, 5]

//Map Create a new array by doing something with each item in an array

// function double(x){
//     return   x*2;
// }                  am 3 line yaksana ba x=> x*2
//const newNumbers= numbers.map( x => x*2)

//la map pewest naka array nwe bnasenen xoy rastawxo aykata naw arrayake nwe
//balam la forEach pewestman ba arrayake nwe haya

// var newNumbers=[];
// numbers.forEach(function (x){
//     newNumbers.push(x*2)
// })


// const newNumbers = numbers.map(x => x*2)
//kurtren rega bo nusene map 
//console.log(newNumbers);


//var numbers=[3, 56, 2, 48, 5]
//Filter - create a new array by keeping the items that return true.
 //lera xot marje bo da aney loop aka basar hamw elementakan ba pey marjaka
 //return aka
// const newNumbers = numbers.filter(x => x >10)

// console.log(newNumbers);


// //ba forEach
// var newNumbers=[];
// numbers.forEach(function (num){
//     if(num < 10){
//         newNumbers.push(num)
//     }
// })

// console.log(newNumbers);


//var numbers=[3, 56, 2, 48, 5]
//Reduce  - Accumulate a value by doing something to each item in an array
//lera hamw itemakane naw array ko akatawa

// var newNumber=numbers.reduce(accumulator, currentNumber)=> accumulator + currentNumber)  

// console.log(newNumber);

// var newNumber=0
// numbers.forEach(function (currentNumber){
//     newNumber+= currentNumber
// })
// console.log(newNumber);



// var numbers=[3, 56, 2, 48, 5]
// //Find - find the first item that matches from an array.
// //lera kama item yakam jar marjakay jebaje krdbw awa printaka

// var newNumber = numbers.find(function (num){
//     return num > 10
//     //lera 56 w 48 harduke la 10 gawratara balam 56 yakama la jebajekrdne marjaka
//     // boya aw print aka
// })

// console.log(newNumber);


// var numbers=[3, 56, 2, 48, 5]
// //Find-index - find the index of the first item that matches.

// const index= numbers.findIndex(function (x){
//     return x > 10
//     //lera wtwmana kama element yakamjar aw marjay jebaje krd awa 
//     //ba indexy print bka
// })

// console.log(index);