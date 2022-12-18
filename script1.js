'use strict'
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
// const dolphin_avg_score = (96 + 108 + 89) / 3
// const koala_avg_score = (88 + 91 + 110) / 3
// if(dolphin_avg_score > koala_avg_score){
//     console.log(`Team Dolphin with score ${dolphin_avg_score} wins`)
// } else if(dolphin_avg_score === koala_avg_score){
//     console.log("Its a draw")
// }else {
//     console.log(`Team Koala with points ${koala_avg_score} wins`)
// }

// const dolphin_avg_score = (97 + 112 + 101) / 3
// const koala_avg_score = (109 + 95 + 106) / 3
// if(dolphin_avg_score > 100 && dolphin_avg_score >koala_avg_score){
//     console.log("Team Dolphin wins")
// }else if(koala_avg_score > 100 && koala_avg_score > dolphin_avg_score){
//     console.log("Team Koala wins")
// }else {
//     console.log('A draw')
// }

// //Coding challenge #4
// const billValue = 275
// const tipValue = billValue > 50 && billValue < 300 ? billValue * 0.15: billValue * 0.2
// let finalValue = billValue + tipValue
// console.log(`Bill is ${billValue}, tip is ${tipValue} and total is ${finalValue}`)

// //function declaration
// const calcAge = function (birthYear){
//     return 2037 - birthYear
// }
// console.log(calcAge(1991))

// //arrow function
// const calcAge = birthYear => 2037 - birthYear
// console.log(calcAge(1991))

// const retireYear = (birthYear, firstName) => {
//     const age = 2037 - birthYear
//     const retirement = 65 - age
//     // return retirement
//     return `${retirement} years remaining for ${firstName}'s retirement`
// }
// console.log(retireYear(1991, 'John'))

//functions inside function
// function cutfruits(fruit){
//     return fruit * 4
// }
// function fruitprocessor(apples, oranges){
//     const applepieces = cutfruits(apples)
//     const orangepieces = cutfruits(oranges)

//     return `Juice with ${applepieces} pieces of apple and ${orangepieces} pieces of orange`
// }
// console.log(fruitprocessor(2,3))

// //section 3 coding challenge #1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
// const avgDolphins = calcAverage(44,23,71)
// const avgKoalas = calcAverage(65,54,49)

// function checkwinner(avgDolphins, avgKoalas){
//     if(avgDolphins >= avgKoalas * 2){
//         return `Dolphins win ${avgDolphins} vs ${avgKoalas}`
//     }else if(avgKoalas >= avgDolphins * 2){
//         return `Koalas win ${avgKoalas} vs ${avgDolphins}`
//     }else return `No winner`
// }
// console.log(checkwinner(avgDolphins, avgKoalas))

// const arr = [1,2,3,8,7,6]
// console.log(arr.indexOf(2))
// console.log(arr.includes(3))

// //coding challenge #2
// const calcTip = (billValue) => billValue >= 50 && billValue <= 300? billValue * 0.15: billValue * 0.2
// console.log(calcTip(100))
// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips)
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(total)

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     calcAge: function(){
//         return 2037 - this.birthYear
//     },
//     hasDrivingLicence: false
// }
// console.log(jonas.calcAge())

// console.log(`${jonas.firstName} is a ${jonas.calcAge()} year old teacher and has ${jonas.hasDrivingLicence ? 'a': 'no'} driving licence`)

//coding challenge #3

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height **2)
//         return this.bmi
//     }
// }
// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height **2)
//         return this.bmi
//     }
// }
// if(mark.calcBMI() > john.calcBMI()){
//     console.log(`${mark.fullName}'s BMI (${mark.calcBMI(mark.bmi)}) is higher than ${john.fullName}'s BMI (${john.calcBMI(john.bmi)})`)
// } else {
//     console.log(`${john.fullName}'s BMI (${john.calcBMI(john.bmi)}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI(mark.bmi)})`)
// }

// let dice = Math.floor(Math.random() * 6) + 1
// while(dice < 3){
//     console.log(`You got ${dice}`)
//     dice = Math.floor(Math.random() * 6) + 1
// }

// //Coding challenge #4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []
// const calcTip = (billValue) => billValue >= 50 && billValue <= 300? billValue * 0.15: billValue * 0.2

// for(let i = 0; i < bills.length; i++){
//     tips.push(calcTip(bills[i]))
//     totals.push(tips[i] + bills[i])
// }
// console.log(tips)
// console.log(totals)
// let sum = 0
// function calcAverage(arr){
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     let avg = sum/arr.length
//     return avg
// }
// console.log(calcAverage(totals))
// let string = ""
// const printforecast = function(arr){
//     for(let i = 0; i < arr.length; i++){
//         string += `${arr[i]}C in ${i + 1} days ...`
//     }
//     return string
// }
// console.log(printforecast([12, 5, -5, 0, 4]))


// const myname  = 'Jonas'

// function first(){
//     const age = 30 
    
//     if(age >= 30){
//         const decade = 3
//         var millenial = true
//     }

//     function second(){
//         const job = 'teacher'

//         console.log(`${myname} is a ${age} year old ${job}`)
//     }
//     second()
// }

// first()

// const a = 10
// if(a > 8){
//     var b = 5
// }
// console.log(b)

// const a = 'Jonas'
// first()

// function first(){
//     const b = 'Hello'
//     second()

//     function second(){
//         const c = 'Hi!'
//         third()
//     }
// }
// function third(){
//     const d = 'Hey!'
//     console.log(d + c + b + a)
// }

// function calcAge(birthYear){
//     const age = 2037 - birthYear

//     function printAge(){
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`
//         console.log(output)

//         if(birthYear >= 1981 && birthYear <= 1996){
//             var millenial = true

//             //creating new variable with same name as outer scope's variable
//             const firstName = 'Steven'

//             //Reassigning outer scope's variable
//             output = 'New output'
//             const str = "Hello"

//             function add(a, b){
//                 return a + b
//             }
//         }
//         console.log(millenial)
//         add(2, 3)
//     }
//     printAge()
//     return age
// }
// const firstName = 'Jonas'
// calcAge(1991)

// const myName = 'Jonas'
// if(myName === 'Jonas'){
//     console.log(`Jonas is a ${job}`)
//     const age = 2037 - 1989
//     console.log(age)
//     const job = 'teacher'
// }

// //variables
// console.log(me)
// console.log(job)
// console.log(year)

// var me = 'Jonas'
// let job = 'teacher'
// const year = 1991

// //functions
// console.log(addDecl(2,3))
// console.log(addExpr(2,3))
// console.log(addArrow(2,3))

// function addDecl(a,b){
//     return a + b
// }

// const addExpr = function(a,b){
//     return a + b
// }

// const addArrow = (a, b) => {
//     return a + b
// }


// //Example of var hoisting problem
// if(!numProducts) deleteShoppingCart()
// var numProducts = 10

// function deleteShoppingCart(){
//     console.log('All products are deleted')
// }

// const jonas = {
//     name: 'Jonas',
//     year: 1989,
//     calcAge: function(){
//         return 2037 - this.year
//     }
// }
// console.log(jonas.calcAge())

//function expression 'this'
// const calcAge =function (birthYear){
//     console.log(2037 - birthYear)
//     console.log(this)
// }
// calcAge(1980)

//arrow-function 'this'
// const calcAgeArrow =(birthYear) =>{
//     console.log(2037 - birthYear)
//     console.log(this)
// }
// calcAgeArrow(1980)

// const jonas = {
//     name: 'Jonas',
//     year: 1989,
//     calcAge: function(){
//         return 2037 - this.year
//     }
// }
// jonas.calcAge()

// const matilda = {
//     year: 2017
// }

// matilda.calcAge = jonas.calcAge
// console.log(matilda.calcAge())
// const f = jonas.calcAge
// f()

//this in arrow function
// const jonas = {
//     firstName: 'Jonas',
//     year: 1989,
//     calcAge: function(){
//         return 2037 - this.year
//     },
//     greet: () => console.log(this)
// }
// jonas.greet()

//this inside function of function in an object
// const jonas = {
//     firstName: 'Jonas',
//     year: 1989,
//     calcAge: function(){
//         console.log(2037 - this.year)   
//         const self = this
//         const isMillenial = function (){
//             console.log(self.year >= 1981 && self .year <= 1996)
//             // console.log(this.year >= 1981 && this.year <= 1996)
//         }
//         isMillenial()
//     },
//     greet: () => console.log(this)
// }
// jonas.greet()
// jonas.calcAge()

// const addExpr = function (a,b){
//     console.log(arguments)
//     return a + b
// }
// addExpr(2, 4)

// var addArrow = (a,b) => {
//     console.log(arguments)
//     return a + b
// }
// addArrow(4,7)

//Primitive vs reference

//primitive
// let age = 30
// const oldAge = age
// age = 31
// console.log(age)
// console.log(oldAge)

//primitive
// const me = {
//     name: 'Jonas',
//     age: 30
// }
// const friend = me
// friend.age = 27

// console.log('Friends:',friend)
// console.log('Me:', me)


//reference types
// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27
// }
// const marriedJessica = jessica
// marriedJessica.lastName = 'Davis'
// console.log(jessica)
// console.log(marriedJessica)


//copying objects
// const jessica2 = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
//     family: ['Alice', 'Bob']
// }

// const jessicaCopy = Object.assign({}, jessica2)
// jessicaCopy.lastName = 'Davis'
// jessicaCopy.family.push('Mary')
// jessicaCopy.family.push('John')
// console.log(jessica2)
// console.log(jessicaCopy)

//array destructuring
const obj = {
    nmae: 'Jonas',
    age: 34,
    likes: ['football', 'cricket', 'basketball', 'snooker', 'chess'],
    hobby: function(index1, index2){
        return [this.likes[index1], this.likes[index2]]
    }
}

const [like1, like2] = (obj.hobby(1, 2))
console.log(like1, like2)