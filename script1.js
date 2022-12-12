// (first 10 even numbers)//
// let arr = []
// for (let i = 2; i <= 10; i++){
//     if(i % 2 === 0)
//     console.log(i)
// }

// (Sum of numbers in an array) //
// function arraySum(arr){
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }
// arraySum([4,8,6,3])

// Array sort//
// let x = 0
// let arr = [5,7,1,4,3]
// for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//         if(arr[i] > arr[j]){
//             x = arr[i]
//             arr[i] = arr[j]
//             arr[j] = x 
//         }
//     }
// }
// console.log(arr)


// Count number of vowels//
// const myString = "catch"
// const vowels = ['a','e','i','o','u']
// let count = 0
// for(let i = 0; i < myString.length; i ++){
//     for(let j = 0; j < vowels.length; j++){
//         if(myString[i] === vowels[j])
//         count++
//     }
// }
// console.log(count)

// return positive numbers from array //
// const arr = [1,7,-8,3,-9]
// let newArr = []
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//         newArr.push(arr[i])
//     }   
// }
// console.log(newArr)

// Fibonaci series//
// let a = 0
// let b = 1
// let sum = 0
// let arr = []
// for(let i = 1; i < 11; i++){
//     arr.push(a)
//     sum = a + b
//     a = b
//     b = sum
// }
// console.log(arr)


// Reverse an array//
// let a = [4,7,2,6,3]
// for(let i = 0; i< a.length/2;i++){
//     x = a[i]
//     a[i] = a[a.length - 1 -i]
//     a[a.length - 1 - i] = x
// }
// console.log(a)


// Reverse a string //
// let a = "radar"
// let s = ""
// for(let i = 0;i < a.length;i++){
//     s += a[a.length - 1 -i]
// }
// console.log(s)

// append 2 arrays //
// function newArray(a, b){
//     let x = a.length
//     let y = b.length
//     let c = []
//     for(let i = 0; i < x; i++){
//         c.push(a.shift())
//         }
//         for(let i = 0; i < y; i++){
//             c.push(b.shift())
//             }
//     console.log(c)
// }
// newArray([1,2,3,4,9], [5,6,7,8])


// Sum of digits in a Number //
// let num = 97
// let myString = num.toString()
// let sum = 0
// for(let i = 0;i <myString.length;i++){
//     sum += Number(myString[i])
// }
// console.log(sum)


// Rotate an array to left //
// function rotate(arr){
//     let x = arr.pop()
//     arr.unshift(x)
//     console.log(arr)
// }
// rotate([1,2,3])

// Remove duplicates //
// let newArr = []
// function removeDuplicates(arr){
//     for(let i = 0; i < arr.length;i++){
//         let count = 0
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] === arr[j])
//             count++
//         }
//         if(count === 0){
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr)
// }
// removeDuplicates([4,4,8,9,9])

// const increment = (function() {
//     return function increment(num, val){
//         return num + val
//     }
// })()

// console.log(increment(5, 6))

// const sum = (function(){
//     return function sum(...args){
//         return args.reduce((a, b) => a + b, 0)
//     }
// })()
// console.log(sum(1,2,3))



// const arr1 = ["Jan", "Feb", "Mar", "Apr"]
// let arr2
// (function() {
//     arr2 = [...arr1]
//     arr1[0] = 'potato'
// })()
// console.log(arr2)

// const newObj = {
//     x: 10,
//     y: 15, 
//     z:5
// }
// const {x:a, y:b, z:c} = newObj
// console.log(a, b, c)

// const AVG_TEMPERATURES = {
//     today: 77.5,
//     tomorrow : 76
// }
// function getTempOfTmrw(avgTemp){
//     const {tomorrow: tempTmrw} = avgTemp
//     return tempTmrw
// }
// console.log(getTempOfTmrw(AVG_TEMPERATURES))

// const LOCAL_FORECAST = {
//     today: {min: 72, max: 83},
//     tomorrow: {min: 73.3, max: 84.6}
// }
// function getMaxOfTomrw(forecast){
//     const { tomorrow : {max: maxOfTmrw}} = forecast
//     return maxOfTmrw
// }
// console.log(getMaxOfTomrw(LOCAL_FORECAST))

// const source = [1, 2, 3, 4, 5, 6, 7]
// function removeFirst(list){
//     const [, , ...arr] = list
//     return arr
// }
// console.log(removeFirst(source))

// const stats = {
//     max: 56.78, 
//     std_dev: 4.34,
//     mode: 23.87,
//     min: -0.75,
//     avg: 35.85
// }
// const half = function(){
//     return function half({max, min}){
//         return (max + min)/ 2.0
//     }
// }()
// console.log(half(stats))

// const result = {
//     success: ['max-length', 'no-amd', 'prefer-arrow-function'],
//     failure: ['no-var', 'var-on-top', 'linebreak'],
//     skipped: ['id-blacklist, no-dup-keys']
// }
// function makeList(arr){
//     const resultDisplay = []
//     for(let i = 0; i < arr.length; i++){
//         resultDisplay.push( `
//         <li class = 'text-warning>${arr[i]}
//         </li>
//         `) 
//     }

//     return resultDisplay
// }
// console.log(makeList(result.failure))

// const createPerson = (name, age, gender) => {
//     return {
//         name: name,
//         age: age,
//         gender: gender
//     }
// }
// console.log(createPerson("Aneesh", 31, "male"))

//or
// const createPerson = (name, age, gender) => ({name, age, gender})
// console.log(createPerson("Aneesh", 31, "male"))

// const bicycle = {
//     gear: 2, 
//     setGear: function(newGear){
//         this.gear = newGear
//     }
// }
// bicycle.setGear(3)
// console.log(bicycle.gear)

//or
// const bicycle = {
//     gear: 2, 
//     setGear(newGear){
//         this.gear = newGear
//     }
// }
// bicycle.setGear(3)
// console.log(bicycle.gear)

// let SpaceShuttle = function (targetPlanet){
//     this.targetPlanet = targetPlanet
// }
// let zeus = new SpaceShuttle('Jupiter')
// console.log(zeus.targetPlanet)

//or

// class SpaceShuttle{
//     constructor (targetPlanet){
//         this.targetPlanet = targetPlanet
//     }
// }
// let zeus = new SpaceShuttle('Jupiter')
// console.log(zeus.targetPlanet)

// function makeClasss(){
//     return Vegetable
// }
// const Vegetable = makeClasss()
// const carrot = new Vegetable('carrot')
// console.log(carrot.name)

//or

// function makeClass(){
//     class Vegetable {
//         constructor (name){
//             this.name = name
//         }
//     }
//     return Vegetable
// }
// const Vegetable = makeClass()
// const carrot = new Vegetable('carrot')
// console.log(carrot.name)


// class User {
//     constructor (name, age){
//         this.name = name
//         this.age = age
//     }                               // constructors
// }
// let userone = new User("Aneesh", 31)
// console.log(userone.name)

// const person = {
//     firstName : "Aneesh",
//     lastName: "Mohanan",
//     get fullName(){
//         return `${person.firstName} ${person.lastName}`
//     },
//     set fullName(value){
//         const parts = value.split(' ')
//         this.firstName = parts[0]
//         this.lastName = parts[1]
//     }
// }
// person.fullName = "John Smith"
// console.log(person)


// let x,y
// x = y = 25 - 10 - 5
// console.log(x, y)

//coding challenge #1

// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95

// const bmiMark = massMark / (heightMark ** 2)
// const bmiJohn = massJohn / (heightJohn ** 2)

// const isTrue = bmiMark > bmiJohn

// console.log(bmiMark, bmiJohn, isTrue)

// const massMark = 95
// const heightMark = 1.95
// const massJohn = 85
// const heightJohn = 1.76

// const bmiMark = massMark / (heightMark ** 2)
// const bmiJohn = massJohn / (heightJohn ** 2)

// const isTrue = bmiMark > bmiJohn


// if(bmiMark > bmiJohn){
//     console.log(`Mark's BMI (${bmiMark})is higher than John's BMI (${bmiJohn})`)
// }
// else {
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark})`)
// }

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Jonas'))
// console.log(Boolean({}))

// Challenge #3
const dolphin_score_one = 96
const dolphin_score_two = 108
const dolphin_score_three = 89
const dolphin_avg_score = (dolphin_score_one + dolphin_score_two + dolphin_score_three) / 3
const koala_score_one = 88
const koala_score_two = 91
const koala_score_three = 110
const koala_avg_score = (koala_score_one + koala_score_two + koala_score_three) / 3
if(dolphin_avg_score > koala_avg_score){
    console.log(`Team Dolphin with score ${dolphin_avg_score} wins`)
} else if(dolphin_avg_score === koala_avg_score){
    console.log("Its a draw")
}else {
    console.log(`Team Koala with points ${koala_avg_score} wins`)
}