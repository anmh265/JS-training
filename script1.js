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
// const obj = {
//     nmae: 'Jonas',
//     age: 34,
//     likes: ['football', 'cricket', 'basketball', 'snooker', 'chess'],
//     hobby: function(index1, index2){
//         return [this.likes[index1], this.likes[index2]]
//     }
// }

// const [like1, like2] = (obj.hobby(1, 2))
// console.log(like1, like2)

// const nested = [2,4,[8,9]]
// const [x, , [a,b]] = nested
// console.log(x, a, b)

//default values
// const [a,b,c=1] = [8,9]
// console.log(a,b,c)

// const obj = {
//     firstName: 'Jonas',
//     lastName: 'Williams',
//     age: 34,
// }

// const {firstName, lastName, age} = obj
// console.log(firstName, lastName, age)

// let a = 11
// let b = 20
// const obj = {a: 23, b:30, c:17};
// ({a, b} = obj)
// console.log(a, b)

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const {
//     fri : {open: o, close: c} 
// } = openingHours
// console.log(o, c)

//object destructuring and passing to a function
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//     [weekdays[3]]: {
//       open: 12,
//       close: 22,
//     },
//     [weekdays[4]]: {
//       open: 11,
//       close: 23,
//     },
//     [weekdays[5]]: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//     orderDelivery: function ({starterIndex, mainIndex}){
//         console.log(starterIndex, mainIndex)
//     }
//   };
//   openingHours.orderDelivery({
//     time: '23:30',
//     address: 'Via del Sole, 231',
//     mainIndex: 2,
//     starterIndex: 2
//   })

//spread operator
//   const arr = [7, 8, 9]
//   const newArr = [1, 2, ...arr]
//   console.log(newArr)

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//     oderPasta: function(ing1, ing2, ing3){
//         console.log(
//             `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//           );
//     }
// }

//shallow copy of array
// const copyArray = [...restaurant.mainMenu]
// console.log(copyArray)

//merge 2 arrayS
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(menu)

// const num = 12345
// const arr = [...num]
// console.log(arr)

// const ingredients = [prompt('Ingredient1:'), prompt('Ingredient2:'), prompt('Ingredient3:')]
// console.log(...ingredients)

// const newRestaurant = {
//     foundedIn: 1998,
//     ...restaurant,
//     founder: 'Guiseppe'
// }
// console.log(newRestaurant)
// const restaurantCopy = {...restaurant}
// restaurantCopy.name = 'Ristorante Roma'
// console.log(restaurantCopy.name)
// console.log(restaurant.name)


//rest operator
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood)

//rest operator on objects
// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
//     openingHours: {
//       thu: {
//         open: 12,
//         close: 22,
//       },
//       fri: {
//         open: 11,
//         close: 23,
//       },
//       sat: {
//         open: 0, // Open 24 hours
//         close: 24,
//       },
//     },
//   };
//   const { sat, ...weekdays} = restaurant.openingHours
//   console.log(weekdays)

//rest in functions
// const add = function(...numbers){
//     let sum = 0
//     for(let i = 0; i < numbers.length; i++){
//         sum += numbers[i]
//     }
//      console.log(sum)
// }
// // add(8,5,7,10)
// const x = [23, 5, 7]
// add(...x)

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//     oderPasta: function(ing1, ing2, ing3){
//         console.log(
//             `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//           );
//     },
//     orderPizza: function(mainIngredient, ...otherIngredients){
//         console.log(mainIngredient)
//         console.log(otherIngredients)
//     }
// }
// restaurant.orderPizza('mushrooms', 'onions', 'spinach')
// restaurant.orderPizza('mushrooms')


//Short circuiting
//OR
// console.log(3 || 'Jonas')
// console.log(''|| 'Jonas')
// console.log(undefined || '' || 'Hello'|| 5)

// restaurant.numGuests = 20
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
// console.log(guests1)

// const guests = restaurant.numGuests || 10
// console.log(guests)

//AND
// restaurant.numGuests = ''
// const guests = restaurant.numGuests && 10
// console.log(guests)
// console.log('Jonas' && 0)

// console.log('Hello' && 15 && null && 'Jonas')
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')

//Nullish coalescing operator
// restaurant.numGuests = null
// const guests = restaurant.numGuests ?? 10
// console.log(guests)

//Logical assignemnt operator
//OR assignemtn operator
// const rest1 = {
//     name: 'Capri',
//     numGuests: 5
// }
// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi'
// }

// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 15

// //or

// rest1.numGuests ||= 10
// rest2.numGuests ||= 20

//nullish operator
// rest1.numGuests ??= 10
// rest2.numGuests ??= 10

//AND assignement operator
// rest1.owner = rest1.owner && '<ANONYMOUS'
// rest1.owner &&= '<ANONYMOUS'
// rest2.owner &&= '<ANONYMOUS'

// console.log(rest1)
// console.log(rest2)

//Coding challenge

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//     [
//     'Neuer',
//     'Pavard',
//     'Martinez',
//     'Alaba',
//     'Davies',
//     'Kimmich',
//     'Goretzka',
//     'Coman',
//     'Muller',
//     'Gnarby',
//     'Lewandowski',
//     ],
//     [
//     'Burki',
//     'Schulz',
//     'Hummels',
//     'Akanji',
//     'Hakimi',
//     'Weigl',
//     'Witsel',
//     'Hazard',
//     'Brandt',
//     'Sancho',
//     'Gotze',
//     ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//     },
//     };

// const [players1, players2] = game.players 
// // console.log(players1)
// // console.log(players2)


// const [gk, ...fieldPlayers] = players1
// // console.log(gk)
// // console.log(fieldPlayers)


// const allPlayers = [...players1, ...players2]
// // console.log(allPlayers)


// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// // console.log(players1Final)


// const {odds: {team1, x: draw, team2}} = game
// // console.log(team1, draw, team2) 

// function printGoals(...playerGoals){
//     console.log(`${playerGoals.length} goals were scored`)
// }
// printGoals(...game.scored)

// team1 < team2 && console.log('Team1 is more likely to win')
// team1 > team2 && console.log('Team2 is more likely to win')

//for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

// for(const item of menu)
// console.log(item)

// enhanced object literals

   const openingHours = {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    };
 
const restaurants = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
    orderPizza(mainIngredient, ...otherIngredients){
        console.log(mainIngredient)
        console.log(otherIngredients)
    }
}
// // if(restaurant.openingHours && restaurant.openingHours.mon){
// //     console.log(restaurant.openingHours.mon.open)
// // }

// // console.log(restaurant.openingHours.mon.open)

// //With optional chaining
// // console.log(restaurants.openingHours.mon?.open)

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of weekdays){
//     const open = restaurants.openingHours[day]?.open ?? 'Closed'
//     console.log(`On ${day} we open at ${open}`)
// }


//Methods
// console.log(restaurants.order?.(0, 1) ?? 'No methods')

//Arrays
// const users = [{ name: 'Jonas', age: 34}]
// console.log(users[0].name ?? 'array empty')

// const properties = Object.keys(openingHours)
// console.log(properties)

// for(const day of Object.keys(openingHours))
// console.log(day)

//Property names
// let openStr = `We are open on ${properties.length} days: `
// for(const day of properties){
//     openStr += `${day}, `
// }
// console.log(openStr)

//Property values
// const values = Object.values(openingHours)
// // console.log(values)

// //Entire object
// const entries = Object.entries(openingHours)
// console.log(entries)

// for (const [key, {open, close}] of entries){
//     console.log(`On ${key} we open at ${open} and close at ${close}`)
// }

//Coding challenge 
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };

    // for (const [key,player] of game.scored.entries())
    // console.log(`Goal ${key + 1}: ${player}`)

    // let avg = 0
    // for(const value of Object.values(game.odds)){
    //     avg += value
    // }
    // avg = avg / Object.values(game.odds).length
    // console.log(avg)

    // for(const [team, odd] of Object.entries(game.odds)){
    //     // const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
    //     // console.log(`Odds of ${teamStr} ${odd}`)
    //     console.log(typeof team)
    // }

    // const obj = {
    //     firstName: 'Jonas',
    //     age: 34
    // }
    // console.log(obj['firstName'])

    //SET
    // const orderSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Risotto', 'Pasta'])
    // console.log(new Set(orderSet))
    // console.log(orderSet.size)
    // orderSet.add('Garlic bread')
    // orderSet.delete('Garlic bread')
    // // orderSet.clear()
    // console.log(orderSet)
    
    // const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
    // const staffUnique = [...new Set(staff)]
    // console.log(staffUnique)
    // console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size)
    // // console.log(new Set('Jonas'))

    //MAP
    // const rest = new Map()
    // rest.set('name', 'Classico Italiano')
    // rest.set(1, 'Firenze, Italy')
    // console.log(rest.set(2, 'Lisbon'))

    // rest.set(['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    // .set('open',11)
    // .set('close', 23)
    // .set(true, 'We are open :D')
    // .set(false, 'We are closed :(')

    // console.log(rest.get('name'))
    // console.log(rest.get(false))

    const time = 10
    // console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

    // console.log(rest.has('categories'))
    // rest.delete(2)
    // console.log(rest)
    // console.log(rest.size)

    // const arr = [1,2]
    // rest.set(arr, 'Test')
    // console.log(rest)
    // console.log(rest.get(arr))


    //Arrays to map
    const question = new Map([
        ['question', 'What is the best programming language in the world?'],
        [1, 'C'],
        [2, 'Java'],
        [3, 'Javascript'],
        ['correct', 3],
        [true, 'Correct answer'],
        [false, 'Try again']
    ])
    // console.log(question)


    // const hoursMap = new Map(Object.entries(openingHours))
    // console.log(hoursMap)

    // for(const [key, value] of question){
    //     if(typeof key === 'number'){
    //         console.log(`Option ${key}: ${value}`)
    //     }
    // }
    // const answer = Number(prompt('Your answer: '))
    // console.log(question.get(question.get('correct') === answer))

    //Maps to Arrays
    // console.log([...question])
    // console.log([...question.keys()])
    // console.log([...question.values()])


    //Coding challenge 3
    // const gameEvents = new Map([
    //     [17, '⚽ GOAL'],
    //     [36, '🔁 Substitution'],
    //     [47, '⚽ GOAL'],
    //     [61, '🔁 Substitution'],
    //     [64, '🔶 Yellow card'],
    //     [69, '🔴 Red card'],
    //     [70, '🔁 Substitution'],    
    //     [72, '🔁 Substitution'],
    //     [76, '⚽ GOAL'],
    //     [80, '⚽ GOAL'],
    //     [92, '🔶 Yellow card'],
    //     ]);
    
    // const events = [...new Set(gameEvents.values())]
    // console.log(events)

    // gameEvents.delete(64)
    
    // console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`)

    // for(const[key, value] of gameEvents){
    //    const half = key <= 45 ? 'FIRST': 'SECOND'
    //     console.log(`${half} HALF ${key}: ${value}`)
    // }

    //Working with Strings
    // const airline = 'TAP Air Portugal'
    // const plane = 'A320'

    // console.log(plane[0])
    // console.log(airline.indexOf('r'))
    // console.log(airline.lastIndexOf('r'))
    // console.log(airline.slice(4))
    // console.log(airline.slice(4, 7))
    // console.log(airline.slice(0, airline.indexOf(' ')))
    // console.log(airline.slice(airline.lastIndexOf(' ') + 1))

    // const checkMiddleSeat = function(seat){
    //     const s = seat.slice(-1)
    //     s === 'B' || s === 'E'? console.log('Middle seat'): console.log('Not a middle seat')
    // }
    // checkMiddleSeat('11B')
    // checkMiddleSeat('23C')

    // console.log(typeof new String('Jonas'))
    // console.log(typeof new String('Jonas').slice(1))

    // console.log(airline.toLowerCase())
    // console.log(airline.toUpperCase())

    // const passenger = 'Jonas'
    // const passengerLower = passenger.toLowerCase()
    // const passengerCorrect = passenger[0].toUpperCase() + passenger.slice(1)
    // console.log(passengerCorrect)

    // const priceGB = '288,97$'
    // const priceINR = priceGB.replace('$', 'Rs').replace(',', '.')
    // console.log(priceINR)

    // const announcement = 'All pasengers come to boarding door 23, Boarding door 23!'

    // console.log(announcement.replace('door', 'gate'))

    // //replace all occurences of door- 
    // console.log(announcement.replace(/door/g, 'gate'))

    // const plane = 'Airbus A320neo'
    // console.log(plane.includes('Air'))
    // console.log(plane.includes('boeing'))
    // console.log(plane.startsWith('Airbus'))

    // if(plane.startsWith('Airbus') && plane.endsWith('neo')){
    //     console.log('Part of the airbus family')
    // }

    // const checkBaggage = function(items){
    //     const baggage = items.toLowerCase()
    //     if(baggage.includes('knife') || baggage.includes('gun')){
    //         console.log('NOT allowed')
    //     } else console.log('Welcome aboard')
    // }

    // checkBaggage('I have a laptop and a phone')
    // checkBaggage('Have a gun and a knife')

    // const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ')
    // console.log(firstName, lastName)

    // const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
    // console.log(newName)

    // const capitalizeName = function(name){
    //     const names = name.split(' ')
    //     const namesUpper = []

    //     for(const n of names){
    //         // namesUpper.push(n[0].toUpperCase() + n.slice(1))
    //         namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
    //     }
    //     console.log(namesUpper.join(' '))
    // }
    // capitalizeName('jessica ann smith davis')

    //padding
    const message = 'Go to gate 23'
    // console.log(message.padStart(25, '+'))

    // console.log((message.padStart(25, '+')).padEnd(35, '+'))
    // const maskCreditCard = function(number){
    //     const str = number + ''
    //     const last = str.slice(-4)
    //     return last.padStart(str.length, '*')
    // }
    // // console.log(maskCreditCard(4577862245))
    // // console.log(maskCreditCard('78423651287'))

    // //Repeat
    // const message1 = 'Bad weather. All flights delayed..'
    // console.log(message1.repeat(5))

    // document.body.append(document.createElement('textarea'));
    // document.body.append(document.createElement('button'));

    
    // document.querySelector('button').addEventListener('click', function(){
    //     const text = document.querySelector('textarea').value
    //     const rows = text.split('\n')
    //     console.log(rows)

    //     for(const [i, row] of rows.entries()){
    //         const [first, second] = row.toLowerCase().trim().split('_')
    //         const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`

    //         console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`)
    //     }
    // })


    //Coding challenge
  //   const flights =
  // '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

  // console.log(flights.split('+'))

  // for(const flight of flights.split('+')){

  //   const [type, from, to, time] = flight.split(';')
  //   const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replace(/_/g, ' ').trim()} from ${from.slice(0, 3).toUpperCase()} to ${to.slice(0, 3).toUpperCase()} ${time.replace(':', 'hr')}`.padStart(43)
  //   console.log(output)
  // }


  //Functions

  // const bookings = []

  // const createbooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
  //   const booking = {
  //     flightNum,
  //     numPassengers,
  //     price
  //   }
  //   console.log(booking)
  //   bookings.push(booking)
  // }
  
  // createbooking('LH123')
  // createbooking('LH123', 2, 800)

  // const flight = 'LH234'
  // const jonas = {
  //   name: 'Jonas Schedtmann',
  //   passport: 24739479284
  // }

  // const checkIn = function(flightNum, passenger){
  //   flightNum = 'LH999'
  //   passenger.name = 'Mr. ' + passenger.name

  //   if(passenger.passport === 24739479284)
  //   alert('Checked in')
  //   else alert('Wrong passenger')
  // }

  // checkIn(flight, jonas)
  // console.log(flight)
  // console.log(jonas)

  // const newPassport = function (person){
  //   person.passport = Math.floor(Math.random() * 1000000)
  // }

  // newPassport(jonas)
  // checkIn(flight, jonas)

  //Higher order functions
  const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase()
  }

  const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
  }

  const transformer = function (str, fn){
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`)

    console.log(`Transformed by ${fn.name}`)
  }

  // transformer('Javascript is wonderfull!!', upperFirstWord)
  // transformer('Javascript is wonderfull!!', oneWord)


  // // const greet = function (greeting){
  // //   return function(name){
  // //     console.log(`${greeting} ${name}`)
  // //   } 
  // // }

  // const greet = greeting =>  (name) => 
  //     console.log(`${greeting} ${name}`)

  // const greeterCall = greet('Hey')
  // greeterCall('Jonas')
  // greeterCall('Williams')
  // greet('Hello')('Jonas')

  // const lufthansa = {
  //   airline: 'Lufthansa',
  //   iataCode: 'LH',
  //   booking: [],
  //   book(flightNum, name){
  //     console.log(
  //       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  //     )
  //     this.booking.push({flight: `${this.iataCode}${flightNum}`, name})
  //   }
  // }
  // lufthansa.book('40', 'Jonas')

  // console.log(lufthansa)

  // const eurowings = {
  //   airline: 'Eurowings',
  //   iataCode: 'EW',
  //   booking: []
  // }

  // const swiss = {
  //   airline: 'Swiss Air Lines',
  //   iataCode: 'LX',
  //   booking: []
  // }
  // const book = lufthansa.book
  // book(23,'Sara Williams') // poduces error as this is a regular function call,so         this keyword does not exist

  // book.call(eurowings, 23, 'Jonas')
  // book.call(swiss, 583, 'Mary Cooper')

  // const flightData = [583, 'George Cooper']
  // book.apply(swiss,flightData)

  //Bind method
  // const bookEW = book.bind(eurowings)
  // bookEW(23, 'Steven Williams')

  // const bookEW2 = book.bind(eurowings, 23)
  // bookEW2('Jonas Schmedtmann')
  // bookEW2('Martha Cooper')

  // const addTax = (rate, value) => value + value * rate
  // console.log(addTax(0.1, 200))

  // const addVAT = addTax.bind(null, 0.23)    //same as addTAX = value + value * 0.23
  // console.log(addVAT(100))
  // console.log(addVAT(12))

  // const addTax = function(rate){
  //   return function(value){
  //     console.log(value + value * rate)
  //   }
  // }

  // const addVAT = addTax(0.1)
  // addVAT(200)

  //Coding challenge
  // const poll = {
  //   question: "What is your favourite programming language?",
  //   options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  //   answers: new Array(4).fill(0),

  //   //Get answer
  //   registerNewAnswer(){
  //   const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`
  //   )
  //   )
  //   console.log(answer)

  //   //Register answer
  //   typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++
    
  //   this.displayResults()
  //   this.displayResults('string')
  //   },
    
  //   displayResults(type = 'array'){
  //     if(type === 'array'){
  //       console.log(this.answers)
  //     }
  //     else if(type === 'string'){
  //       console.log(`Poll results are ${this.answers.join(',')}`)
  //     }
  //   }
  //   }
  //   poll.displayResults.call({answers: [5, 2, 3]}, 'string')


//Immediately invoked functioon expression
// const runOnce = function(){
//   console.log('This will never run again')
// }
// runOnce();

//IIFE
// (function(){
//   console.log('This will never run again')
// })()

//CLOSURE
// const secureBooking = function(){
//   let passengerCount = 0

//   return function(){
//     passengerCount++
//     console.log(`${passengerCount} passenger${passengerCount === 1 ? '': 's'}`)
//   }
// }
// const booker = secureBooking()
// booker()
// booker()
// booker()
// console.dir(booker)

// let f
// const g = function(){
//   const a = 23
//   f = function (){
//     console.log(a * 2)
//   }
// }
// const h = function(){
//   const b = 77
//   f = function (){
//     console.log(b * 2)
//   }
// }
// g()
// f()

// h()
// f()
// console.dir(f)

// const boradPassengers = function(n, wait){
//   const perGroup = n / 3
//   setTimeout(function(){
//     console.log(`We are now boarding all ${n} passengers`)
//     console.log(`There are 3 groups, each with ${perGroup} passengers`)
//   }, wait * 1000)

//   console.log(`Will satrt booking in ${wait} seconds`)
// }
// boradPassengers(180, 3)


//ARRAYS//
// let arr = ['a', 'b', 'c', 'd', 'e']

//SLICE
// console.log(arr.slice(2))
// console.log(arr.slice(2, 4))
// console.log(arr.slice(-2))
// console.log(arr.slice(-4, -1))
// console.log(arr.slice())

//SPLICE
// console.log(arr.splice(2))
// console.log(arr.splice(-1))
// console.log(arr.splice(1, 2+))
// console.log(arr)

//REVERSE
// console.log(arr.reverse())
// console.log(arr)


//CONCAT
// let arr2 = ['j', 'i', 'h', 'g', 'f']
// let letters = arr.concat(arr2.reverse())
// console.log(letters)

// //JOIN
// console.log(letters.join('-'))

//AT
// const arr = [10, 15, 20]
// console.log(arr.at(0))

// //getting last element of an array
// console.log(arr[arr.length - 1])
// console.log(arr.slice(-1)[0])
// console.log(arr.at(-1))

// console.log('jonas'.at(1))

//ForEach()
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// for(const [i, movement] of movements.entries()){
//   if(movement > 0){
//     console.log(`Movement ${i + 1}: You deposited ${movement}`)
//   }
//   else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
//   }
// }

// for(const movement of movements){
//   if(movement > 0)
//   console.log(`You deposited ${movement}`)
//   else 
//   console.log(`You withdrew ${Math.abs(movement)}`)
// }

// console.log(`\n forEACH()`)
// movements.forEach(function(movement){
//   if(movement > 0)
//   console.log(`You deposited ${movement}`)
//   else 
//   console.log(`You withdrew ${Math.abs(movement)}`)
// })

// movements.forEach(function(mov, i, arr){
//   if(mov > 0){
//     console.log(`Movement ${i + 1}: You deposited ${mov}`)
//   }
//   else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`)
//   }
// })

// MAP forEach()
// const currencies = new Map([
//   ['USD', 'United Sates dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling']
// ])

// currencies.forEach(function(value, key, map){
//   console.log(`${key}: ${value}`)
// })

// //SET forEach()
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR'])
// currenciesUnique.forEach(function(value, key, map){
//   console.log(`${key}: ${value}`)
// })

//Coding challenge

// const checkdogs = function(dogsJulia, dogsKate){
//   const newDogsJulia = dogsJulia.slice(1, -2)
//   const totalDogList = newDogsJulia.concat(dogsKate)
  
//   totalDogList.forEach(function(value, i){
//     value < 3 ? console.log(`Dog number ${i + 1} is still a puppy 🐶`): console.log(`Dog number ${i + 1} is an adult`)
//   })
// }
// checkdogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
// // checkdogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])

//map()
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const euroToUsd = 1.1

// const movementsUsd = movements.map(function(mov){
//   return mov * euroToUsd
// })
const movementsUsd = movements.map(mov => mov * euroToUsd)

// console.log(movements)
// console.log(movementsUsd)

const movementsUsdfor = []
for(const mov of movements)
movementsUsdfor.push(mov * euroToUsd)
// console.log(movementsUsdfor)

const movementsDescription = movements.map((mov, i, arr) =>

  `Movement ${i + 1}: You ${mov > 0 ? 'deposited': 'withdrew'} ${Math.abs(mov)}`
  // if(mov > 0){
  //   return `Movement ${i + 1}: You deposited ${mov}`
  // }
  // else {
  //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`
  // }
)
// console.log(movementsDescription)

// //filter()
// const  deposits = movements.filter(function(mov){
//   return mov > 0
// })
// console.log(movements)
// console.log(deposits)

// const depositsFor = []
// for(const mov of movements){
//   if(mov > 0)
//   depositsFor.push(mov)
// }
// console.log(depositsFor)

// const withdrawals = movements.filter(mov => mov < 0)
// console.log(withdrawals)

//reduce()
// const balance = movements.reduce(function(acc, curr, i, arr){
//   console.log(`Iteration ${i}: ${acc}`)
//   return acc + curr
// }, 0)

// const balance = movements.reduce((acc, curr) => acc + curr, 0)

// console.log(balance)

// //max value

// const max = movements.reduce((acc, mov) => {
//   if(acc > mov)
//   return acc
//   else return mov
// }, movements[0])
// console.log(max)

//CODING CHALLENGE
// const calcAverageHumanAge = function(ages){
//   // const humanAges = ages.map(age => age <= 2 ? 2 * age: 16 + age * 4).filter(age => age < 18)
//   const humanAges = ages.map(age => age <= 2 ? 2 * age: 16 + age * 4).reduce((acc, age) => acc + age, 0)/ ages.length
//   return humanAges
// }
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))

// const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * euroToUsd).reduce((acc, mov) => acc + mov, 0)
// // console.log(totalDepositsUSD)

// //Coding challenge 
// const calcAverageHumanAge = ages => ages.map(age => age <= 2 ? 2 * age: 16 + age * 4).filter(age => age >= 18).reduce((acc, age) => acc + age / ages.length, 0)

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))

//find()
// const firstWithdrawal = movements.find(mov => mov < 0)

// console.log(movements)
// console.log(firstWithdrawal)

//some()
const anyDeposits = movements.some(mov => mov > 0)
// console.log(anyDeposits)

//every()

// console.log(movements.every(mov => mov > 0))

// const deposit = mov => mov > 0
// console.log(movements.some(deposit))
// console.log(movements.every(deposit))
// console.log(movements.filter(deposit))

//flat()
// const arr = [[1, 2, 3], [4, 5, 6, 7]]
// console.log(arr.flat())

// const arrDeep = [[[1 , 2], 3], [4, 5, 6], 7, 8]
// console.log(arrDeep.flat(2))

//Sorting
//fot Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
// console.log(owners)
// console.log(owners.sort())

//for Numbers
// console.log(movements)

//ascending
// movements.sort((a, b) => {
//   if(a > b) return 1
//   if(a < b) return -1
// })

movements.sort((a, b) => a - b)
// console.log(movements)

//descending
// movements.sort((a, b) => {
//   if(a > b) return -1
//   if(a < b) return 1
// })

movements.sort((a, b) => b - a)
// console.log(movements)

// const arr = [1, 2, 3, 4, 5, 6]
// const x = new Array(7)
// console.log(x)
// console.log(x.map(() => 5))

// x.fill(1, 3, 5)
// console.log(x)

// arr.fill(23, 2, 6)
// console.log(arr)

// //Array.from
// const y = Array.from({length: 7}, () => 1)
// console.log(y)

// const z = Array.from({length: 7}, (curr, i) => i + 1)
// console.log(z)

// const randomDice = Array.from({length: 100}, (curr, i) => Math.floor(Math.random() * 6) + 1)
// console.log(randomDice)

//Coding challenge
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
//   ];

//   dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28))
//   console.log(dogs)


//  const dogSarah =  dogs.find(dog => dog.owners.includes('Sarah'))
//  console.log(dogSarah)
//  console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much': 'little'}`)
 
//  const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners)
//  console.log(ownersEatTooMuch)

//  const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners)
//  console.log(ownersEatTooLittle)

//  console.log(`${ownersEatTooMuch.join(' and ')}'s dog eat too much!`)
//  console.log(`${ownersEatTooLittle.join(' and ')}'s dog eat too litlle!`)

//  console.log(dogs.some(dog => dog.curFood === dog.recFood))

// //  console.log(dogs.some(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1))
// const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1

// console.log(dogs.some(checkEatingOkay))

// console.log(dogs.filter(checkEatingOkay))

// const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood)
// console.log(dogsCopy)

// console.log(0.1 + 0.2)
// console.log(0.1 + 0.2 === 0.3)

// console.log(Number.parseInt('30px', 10))
// console.log(Number.parseFloat('2.5rem'))

// //NaN
// // console.log(Number.isNaN(20))
// // console.log(Number.isNaN('20'))
// // console.log(Number.isNaN(+'23X'))
// console.log(Number.isNaN(23 / 0))


// // console.log(Number.isFinite(20))
// // console.log(Number.isFinite('20'))
// console.log(Number.isFinite(23 / 0))

// console.log(Number.isInteger(23 / 0))

// console.log(Math.sqrt(25))
// console.log(25 ** (1 / 2))
// console.log(8 ** (1 / 3))

// console.log(Math.max(5, 18, 11, 2))
// console.log(Math.max(4, 8, '23X', 6))
// console.log(Math.max(4, 8, '23', 6))
// console.log(Math.min(4, 3, 5, 1, 6))

// console.log(Math.PI * Number.parseFloat('10px') ** 2)
// console.log(Math.trunc(Math.random() * 6 + 1))


//GET NUMBERS WITHIN A RANGE
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min
// console.log(randomInt(2, 8))

//Rounding numbers
// console.log(Math.round(23.6))
// console.log(Math.round(23.2))
// console.log(Math.round(-23.2))
// console.log(Math.round(-23.6))

// console.log(Math.trunc(23.3))
// console.log(Math.trunc(23.6))

// console.log(Math.ceil(23.6))
// console.log(Math.ceil(23.2))

// console.log(Math.floor(23.4))
// console.log(Math.floor(23.6))

// console.log(Math.trunc(-23.4))
// console.log(Math.floor(-23.4))

// //Rounding decimals
// console.log((2.4).toFixed(0))
// console.log((2.4).toFixed(3))
// console.log(+(2.345).toFixed(2))

// console.log( 5 % 2)

// const isEven = n => n % 2 === 0
// console.log(isEven(8))
// console.log(isEven(9))

const diameter = 287_460_00_00
// console.log(diameter)

const transferFee1 = 15_00
const transferFee2 = 1_500
// console.log(transferFee1, transferFee2)

// const PI = 3._145 //Illegal
// // console.log(PI)

// console.log(Number('230_00'))
// console.log(parseInt('230_00'))

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(2 ** 53 - 1)

// console.log(452279664484466514448734n)  //n - BigInt
// console.log(BigInt(452279664484466514448734))

// console.log(2044587336n + 23) //error
// console.log(24442n > 200)

//DATE()

// const now = new Date()
// console.log(now)

const future = new Date(2037, 10, 19, 15, 23)
// console.log(future)
// console.log(future.getFullYear())
// console.log(future.getMonth())
// console.log(future.getDate())
// console.log(future.getDay())
// console.log(future.getHours())
// console.log(future.getMinutes())
// console.log(future.getSeconds())
// console.log(future.toISOString())
// console.log(future.getTime())

// future.setFullYear(2040)
// console.log(future)

//*****************Recursion******************
// function increment(x){
//   if(x>0){
    
//     increment(x-1)
//     console.log(x)
//   }
//   else return 
// }
// increment(3)






// const calcDaysPassed = (date1, date2) => Math.abs((date2 - date1) / (1000 * 60 * 60 * 24))
// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24))
// console.log(days1)


// const num = 3884797.23
// // const options = {
// //   style: 'unit',
// //   unit: 'celsius'
// // }

// // const options = {
// //   style: 'percentage',
// //   unit: 'celsius'
// // }

// const options = {
//   style: 'currency',
//   currency: 'EUR',
//   // useGrouping: false
// }

// console.log(navigator.language, new Intl.NumberFormat(navigator.language, options).format(num))
// console.log('US: ', new Intl.NumberFormat('en-US', options).format(num))
// console.log('US: ', new Intl.NumberFormat('en-US').format(num))

// console.log('US: ', new Intl.NumberFormat('en-US', options).format(num))


//setTimeout

// setTimeout(()=> console.log(`Here is your pizza`), 3000)

// const ingredients = ['spinach', 'olive']
// setTimeout((ing1, ing2) => 
//   console.log(`Pizza with ${ing1} ${ing2}`)
// , 2000, ...ingredients)

//setInterval

// setInterval(function(){
//   const now = new Date()
//   console.log(now)
// },1000)



//Constructor functions

// const Person = function(firstName, birhtYear){
//   // console.log(this)
//   this.firstName = firstName
//   this.birhtYear = birhtYear

// }

// const jonas = new Person('Jonas', 1991)
// // console.log(jonas)

// const matilda = new Person('Matilda', 2017)
// const jack = new Person('Jack', 1975)
// // console.log(matilda)
// // console.log(jack)

// Person.hey = function(){
//   // console.log(`Hey there ${this.firstName}!!`)
// }

// Person.hey()
// jonas.hey()

// const jay = 'Jay'
// console.log(jonas instanceof Person)
// console.log(jay instanceof Person)

// console.log(Person.prototype)

// Person.prototype.calcAge = function(){
//   console.log(2037 - this.birhtYear)
// }
// console.log(Person.prototype)

// console.log(Person.prototype)

// jonas.calcAge()

// console.log(jonas.__proto__.__proto__.__proto__)
// console.log(jonas.__proto__ === Person.prototype)

// console.log(Person.prototype.isPrototypeOf(jonas))
// console.log(Person.prototype.isPrototypeOf(matilda))
// console.log(Person.prototype.isPrototypeOf(Person))

// Person.prototype.species = 'Homo Sapiens'
// console.log(jonas.species, matilda.species)

// console.log(jonas.hasOwnProperty('species'))
// console.log(jonas.hasOwnProperty('firstName'))

// console.log(jonas.__proto__.__proto__)
// console.log(jonas.__proto__.__proto__.__proto__)

// const arr = [3, 6, 4, 5, 6, 9, 3]
// console.log(arr.__proto__)
// console.log(arr.__proto__ === Array.prototype)

// Array.prototype.unique = function(){
//   return [...new Set(this)]
//

// console.log(arr.unique())
// console.dir(x => x + 1)


//Coding challenge

// const Car = function(make, speed){
//   this.make = make
//   this.speed = speed
// }

// Car.prototype.accelerate = function(){
//   this.speed += 10
//   console.log(`${this.make} going at ${this.speed}km/hr`)
// }

// Car.prototype.brake = function(){
//   this.speed -= 5
//   console.log(`${this.make} going at ${this.speed}km/hr`)
// }

// const bmw = new Car('BMW', 120)
// console.log(bmw)
// bmw.accelerate()

// const mercedes = new Car('Mercedes', 95)
// mercedes.accelerate()

// bmw.accelerate()
// bmw.brake()

// mercedes.accelerate()
// mercedes.brake()

//Classes

class PersonCl {
  constructor (fullName, birthYear){
    this.fullName = fullName
    this.birthYear = birthYear
  }
  //Methods will be added to the .prototype prototype
  calcAge(){
    console.log(2037 - this.birthYear)
  }

  get age(){
    return 2037 - this.birthYear
  }

  set fullName(name){
    console.log(name)
    if(name.includes(' ')) this._fullName = name
    else alert(`${name} is not full name`)
  }

  get fullName(){
    return this._fullName
  }

  //static method
  static hey(){
    console.log('hi there')
  }
}

class StudentCl extends PersonCl{
  constructor(fullName, birthYear, course){
    super(fullName, birthYear)
    this.course = course
  }

  introduce(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`)
  }
}

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science')
// martha.introduce()
// martha.calcAge()

// const jessica = new PersonCl('Jessica Davis' , 1991)
// jessica.calcAge()
// console.log(jessica.age)

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],

//   get latest(){
//     return this.movements.slice(-1).pop()
//   },

//   set latest(mov){
//     this.movements.push(mov)
//   }
// }

// console.log(account.latest)

// account.latest = 50
// console.log(account.movements)

const PersonProto = {
  calcAge(){
    console.log(2037 - this.birthYear)
  },

  init(firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
  }
}
const steven = Object.create(PersonProto)
const StudentProto = Object.create(PersonProto)

StudentProto.init = function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear)
  this.course = course
}

const jay = Object.create(StudentProto)
jay.init('Jay', 1991, 'Computer Science')

StudentProto.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

// jay.introduce()
// jay.calcAge()

// console.log(steven)
// steven.name = 'Steven'
// steven.birthYear = 2002
// steven.calcAge()
// console.log(steven.__proto__ === PersonProto)

// const sarah = Object.create(PersonProto)
// sarah.init('Sarah', 1989)
// sarah.calcAge()

//Coding challenge

// class Car{
//   constructor(make, speed){
//     this.make = make
//     this.speed = speed
//   }

//   accelerate(){
//       this.speed += 10
//       console.log(`${this.make} going at ${this.speed}km/hr`)  
//   }

//   brake(){
//       this.speed -= 5
//       console.log(`${this.make} going at ${this.speed}km/hr`)
//     }

//   get speedUS(){
//     return this.speed / 1.6
//   }

//   set speedUs(speed){
//     this.speed = speed * 1.6
//   }
// }

// const ford = new Car('Ford', 120)
// ford.speedUS
// ford.accelerate()
// ford.accelerate()

// ford.speed = 50
// console.log(ford)


const Person = function(firstName, birhtYear){
  // console.log(this)
  this.firstName = firstName
  this.birthYear = birthYear
}

Person.prototype.calcAge = function(firstName, birthYear){
  console.log(2037 - this.birthYear)
}
const Student = function(firstName, birthYear, course){
  Person.call(this, firstName, birthYear)
  this.course = course
}

// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function(){
//   console.log(`My name is ${this.firstName} and I study ${this.course}`)
// }

// const mike = new Student('Mike', 2020, 'Computer Science')

// console.log(mike)
// mike.introduce()
// // mike.calcAge()

// Student.prototype.constructor = Student
// console.dir(Student.prototype.constructor)


//Coding challenge
// const CarCl = function(make, speed){
//   this.make = make
//   this.speed = speed
// }

// CarCl.prototype.accelerate = function(){
//   this.speed += 10
//   console.log(`${this.make} going at ${this.speed}km/hr`)
// }

// CarCl.prototype.brake = function(){
//   this.speed -= 5
//   console.log(`${this.make} going at ${this.speed}km/hr`)
// }

// const EV = function(make, speed, charge){
//   Car.call(this, make, speed)
//   this.charge = charge
// }

// EV.prototype = Object.create(CarCl.prototype)

// EV.prototype.chargeBattery = function(chargeTo){
//   this.charge = chargeTo
// }

// EV.prototype.accelerate = function(){
//   this.speed += 20
//   this.charge--
//   console.log(
//     `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
//   )
// }

// const tesla = new EV('Tesla', 120, 23)
// tesla.chargeBattery(90)
// console.log(tesla)
// tesla.brake()
// tesla.accelerate()


class Account {
  //Public field
  locale = navigator.language

  //Private fields
  #movements = []
  #pin

  constructor(owner, currency, pin){
    this.owner = owner
    this.currency = currency

    //protected property
    this.#pin = pin
    // this._movements = []
    // this.locale = navigator.language
  }

  //Public methods
  getMovements(){
    return this.#movements
  }

  deposit(val){
    this.#movements.push(val)
    return this
  }

  withdrawal(val){
    this.deposit(-val)
    return this
  }

  requestLoan(val){
    // if(this.#approveLoan(val)){
    if(this._approveLoan(val)){
      this.deposit(val)
      console.log('Loan approved')
      return this
    }
  }

  //Private methods
  _approveLoan(val){
    return true
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111)

// acc1.deposit(250)
// acc1.withdrawal(140)
// acc1.requestLoan(1000)

// console.log(acc1.getMovements())
// console.log(acc1)
// // console.log(acc1.#movements)
// // console.log(acc1.#pin)
// // console.log(acc1.#approveLoan())

// acc1.deposit(300).deposit(500).withdrawal(35).requestLoan(25000).withdrawal(4000)
// console.log(acc1.getMovements())


//Coding challenge
const CarCl = function(make, speed){
  this.make = make
  this.speed = speed

}

CarCl.prototype.accelerate = function(){
  this.speed += 10
  console.log(`${this.make} going at ${this.speed}km/hr`)
}

CarCl.prototype.brake = function(){
  this.speed -= 5
  console.log(`${this.make} going at ${this.speed}km/hr`)
  return this
}

class EVCL extends CarCl{
  #charge

  constructor (make, speed, charge){
    super(make, speed)
    this.#charge = charge
  }
  
chargeBattery(chargeTo){
    this.charge = chargeTo
    return this
  }
  
accelerate(){
    this.speed += 20
    this.#charge--
    console.log(
      `${this.make} is going at ${this.speed} km/h with a charge of ${this.#charge}`
    )
    return this
  }
}

const rivian = new EVCL('Rivian', 120, 23)
rivian.accelerate().accelerate().accelerate().chargeBattery(50).brake()