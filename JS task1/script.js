
// function greetuser(name, age)
//  {

// let msg="hello my name is " + name + " i am learning javascript my age is"   + age   ;

// console.log(msg);
// }

// greetuser("ramesh",23)
// greetuser("vijay",23)




// //alerting
// alert(5 + 9);
// alert("welcome");
// alert("hello i am learning javascript");



//  //logging
//         console.log("firstname");
//        let firsrname=" ramesh ";

//        let age= 23;

//        let isyoung= true;

//        let lastname= undefined;

//        let trophy= null;



//       //arrays
//       let favcolors=["orange","white","green",]
//       favcolors[5]="yellow",
//       favcolors[4]="black",

//       console.log(favcolors);


//       let number1 =5;
//       let number2 =20;

//       console.log(number1 + number2);
//       console.log(number1 -  number2);
//       console.log(number1 * number2);
//       console.log(number1 / number2);



//      /*
//           // object
//        let person={
//               name:"ramesh",
//               age:23,
//               gender:"male",
//               address:"coimbatore,tamilnadu,india",
//               sibling:{
//                      brother:"abishek",
//                      sister:"trisha",
//               },
//               whicle:{
//                  twowheeler:"duke",
//                  fourwheeler:"audi",
//               }

//        }
//        person.age=25;

//        console.log(person.whicle)
//       console.log(person['address'])
//       /*

// let x=5;
//       console.log(x<=5);
//       console.log(x===5);


//        //increment
//        let number1 =5;
//        console.log(number1++);
//        console.log(number1);
//        //decrement
//        let number2 =7;
//        console.log(number2--);
//        console.log(number2);


//        let age=17;

//        let type=age > 18 ? " adult ticket ": " child ticket "

// document.getElementById("demo").innerHTML=type;


// /*
// //logical operators
// const hour = new Date().getHours();
// let greeting;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// document.getElementById("demo").innerHTML = greeting;


// //if else
// let israining = "true";


// if(israining){
//   console.log("don't forget to take umbrella");
// }
// else
//   {
//   console.log("sky is normal enjoy the weather");
// }


// /*
// let hour = new Date().getHours();

// if(hour>=0 && hour<=13){
//   console.log("good morning");
// }
// else if(hour>=13 && hour<=17){
//   console.log("good afternoon");
// }
// else{
//   console.log("good evening");
// }
// /*

//switch case

// let grade="s";

// switch(grade){
//   case "s":
//     console.log("super grade");
//     break;

//     case "a":
//       console.log("excellent grade");
//       break;

//       case "e":
//         console.log("just pass");
//         break;

//         case "u":
//           console.log("failed grade");
//           break;

//           default:
//             console.log("unknow grade");
//             break;
// }

// let marks = 65;

// switch(true){

//   case marks > 90:
//   console.log(" super grade ");
// break;

// case marks > 50:
//   console.log(" pass ");
// break;

// case marks < 50:
//   console.log(" fail ");
// break;

// default:
//   console.log("unknow grade");

// }



// //for loop
// for(let i =1; i <=20; i++){
//   if(i % 2 !==0){
//   console.log("odd numbers" + i);
//   }
// }


//for loop
// for (let i = 2; i <= 20; i++) {
//     if (i % 2 !== 1) {
//         console.log("even numbers" + i);
//     }
// }


// //for loop
//  for( let i=20; i>=1; i++){
//  if( i % 0 !==0){
//    console.log("numbers" + i);
//  }
//  }


// //while loop

// let i=20;

// while(i >=1){
//   if (i % 0 !==0){
//     console.log("numbers" + i);
//   }
//   i--;
// }



// /*
// //FOR-IN
// const person={
//    name:'Ramesh',

//    age:23,

//    gender:'male',
// };

// for(let key in person){
//   console.log(key + " : ", person[key]);
// }
// /*
// const colors=['red','white','blue'];
// for(let key in colors){
//   console.log(key + " : ", colors[key]);
// }



// //for of
// const colors=['red','white','blue'];
// for(let color of colors){
//   console.log("color:" + color);
// }


// //dynamic object
// const person={
//   name:"ramesh"

// }
// person.age=24;
// person.greeting=function(){}

// delete person.greeting;

// console.log(person);*/


//refrence type
//let cartObj ={
// value:5
//};

//function updateCart(cart){
// cart.value++;
//}

//updateCart(cartObj);
//console.log("carts available:", cartObj);


//enumerating  cloning  properties of an object

// const user ={
//   name:'ramesh',
//   getfullName(){
//     console.log('my name is $(this.name)');
//   }
// }

// let another ={
//   ...user
// }
// console.log(another);


//javascript math objects
// console.log(Math.abs(-3));

//  let marks = [56, 87, 90, 67];
//  let result = Math.max(...marks);
//  console.log("maximum marks:" + result);


//string object
// let firsrname = "ramesh";
// let lastname = "kumar";

// const firsrname2 = String("ramesh");

// const name ="ramesh";
// const message =`i am ${name}, learning
//  "javascript"`;
// console.log(message);


//adding element to array

//const number =["apple", "lemon", "grapes"]

//push
//number.push("orange", "pinapple")


//unshift
// number.unshift("guavua")


//splice
// number.splice( 3, 0, "watermelon", "banana")



// console.log(number);

//FINDING element in javascript array

// const items = ["apple", "lemon", "grapes", "apple"]

// console.log(items.includes("apple"));


// const orders = [
//     {id:1, item: "smartphone", quantity:1 },
//     {id:2, item: "maggie", quantity:3 },
// ]

// let result = orders.find(function(order) {
//     return order.item ==="maggie"
// })

// console.log(result);


//arrow function
// const orders = [
//     {id:1, item: "smartphone", quantity:1 },
//     {id:2, item: "maggie", quantity:3 },
// ]

// let result = orders.find((order) => order.item ==="maggie"
// )

// console.log(result);




//removing element in the array

// const number = [1, 2, 3, 4];



//end
//.push => pop
//number.pop()



//start
//unshift => shift
//number.shift()



//splice
//middle
//number.splice(2, 2)

//console.log(number);


//emptying an javascript array

// let numbers = [1, 2, 3, 4];

// numbers = [];

// console.log(numbers);


//combining two array

// const shopping_cart = ["maagi", "beans", "masala"];
// const additional_cart = ["matchbox", "salt"];

// let recipe = shopping_cart.concat(additional_cart);
// let extractedInfo = recipe.slice(1, 3);
// console.log(extractedInfo);
// console.log(recipe);

// const shopping_cart = ["maagi", "beans", "masala"];
// const additional_cart = ["matchbox", "salt"];

// //let recipe = shopping_cart.concat(additional_cart);

// //spread
// let recipe = [...shopping_cart, ...additional_cart]

// console.log(recipe);


//lterating elements
//const dailyRoutine = ["wake up", "eat", "sleep"];
//for of
// for(let routine of dailyRoutine){
//     console.log(routine);
// }
//  //for in
//  for(let routine in dailyRoutine){
//     console.log(routine,dailyRoutine[routine]);
//  }


//for each
// dailyRoutine.forEach((routine, RoutineIndex) => {
//     console.log(RoutineIndex,routine);
// })



// const dailyRoutine = ["wake up", "eat", "sleep"];

// let dailyRoutines =dailyRoutine.join(", ")
// console.log(dailyRoutines);


// let postTitle = "this is my post".toLocaleUpperCase();

// let postSlug = postTitle.split(" ");

// let finalSlug = postSlug.join('_');
// console.log(finalSlug);


//sorting a js array
//const students = [8, 4, 3, 5]
// students.sort(function (a, b)
// {
//     return b-a;
// });

// students.sort();
//students.reverse();
//console.log(students);


// const students = [
//     {id: 3, name: "ramesh"},
//     {id: 8, name: "jaya"},
//     {id: 1, name: "dhana"},
// ];

// students.sort((a, b) =>
// {
//     //  a < b => -1
//     if(a.name < b.name) return -1;

//     // a > b =>1
//     if(a.name > b.name) return1;

//     // a=== b => 0
//     return 0;
// }
// );

// console.log(students);



//  testing is it odd or even
// const number = [1, 2, 3, 4, 5, 6, 7]

// let isEven = number.filter(function (value) {  //some or every
//     return value % 2 === 0;
// });
// let isOdd = number.filter((value) => {  //some or every
//     return value % 2 === 1;
// });
// console.log("isEven:", isEven);
// console.log("isOdd:", isOdd);



//filtering in ajavascript
// const queue = [16, 20, 24];

// let adults = queue.filter(function (value) {
//     return value >= 18;
// });
// console.log("adults:", adults);


// const mobiles = [

//     { id: 1, name: "redmenote7", cost: 9000 },
//     { id: 2, name: "iphone", cost: 20000 },
//     { id: 3, name: "moco", cost: 7000 },
//     { id: 4, name: "vivo", cost: 8500 }

// ];

// let androids = mobiles.filter(function (value) {
//     return value.cost < 10000;
// }
// );

// console.log("androids:", androids);




// const mobiles1 = [


//     { id: 2, name: "iphone", cost: 20000 },
//     { id: 3, name: "moco", cost: 7000 },
//     { id: 4, name: "vivo", cost: 8500 },
//     { id: 1, name: "redmenote7", cost: 9000 }
// ];

// let androids1 = mobiles1.find(function (value) {
//     return value.cost < 10000;
// }
// );

// console.log("androids1:", androids1);


//map

// const people = [
//     { id: 1, firstname: "ramesh", lastname: "kumar" },
//     { id: 2, firstname: "jaya", lastname: "prathap" },
//     { id: 1, firstname: "dhana", lastname: "sekar" },
// ];

// let final = people.map((value) => {
//     let fullname = [value.firstname, value.lastname].join(" ");
//     let obj = { id: value.id, fullname }
//     return obj;
// })
// console.log(final);


// const products = [

//     { id: 1, name: "redmenote7", cost: 9000 },
//     { id: 2, name: "iphone", cost: 20000 },
//     { id: 3, name: "moco", cost: 7000 },
//     { id: 4, name: "vivo", cost: 8500 }

// ];
// // //sort
// let finals = products.sort(function (a, b) {
//     // return a.cost - b.cost; // assending
//     return b.cost - a.cost;  //decending
// }).sort(function (a, b) {
//     if (a.name < b.name) return -1;

//     if (a.name > b.name) return 1;

//     return 1;
// }).filter(function (value) {
//     return value.cost <= 10000;

// }).map(function (val) {
//     return val.name + "  " + val.cost;
// });
// console.log(finals);



// const donations = [45, 78, 95, 65, 4851];


// let add = donations.reduce(function (previousvalue, currentvalue) {
//     return previousvalue + currentvalue;
// });

// console.log(add);


// const shopping = [
//     { id: 1, item: "bread", cost: 50 },
//     { id: 2, item: "milk", cost: 30 },
//     { id: 3, item: "jam", cost: 20 },
// ];

// let total = shopping.reduce(function (accumulator, currentvalue) {
//     return accumulator + currentvalue.cost;
// }, 0);

// console.log(total);



// let no1 = 765;
// let no2 = 78877;


//function declaration
// function addNo(){
//     let result = no1 + no2;
//     console.log(result);
// }


//function expression
// const addNo = function addNo(){
//     let result = no1 + no2;
//     console.log(result);
// };

// anonymous function expression
// const addNo = function () {
//     let result = no1 + no2;
//     console.log(result);
// }
// addNo();



//immediately invoked function expression(iife)

// (function () {
//     let num1 = 87676;
//     let num2 = 54654;

//     let result = num1 + num2;
//     console.log(result);
// })();




// function arguments
// function sumExpense(tiffen, lunch, petrol) {
//     let result = tiffen + lunch + petrol;

//     console.log(result);
// }
// sumExpense(65, 100, 100);



// const ages = [3, 16, 18, 8];
// document.getElementById("demo").innerHTML = ages.some(checkAdult);

// function checkAdult(age) {
//     return age >= 18;
// }



// function greeting(name) {
//     alert(`Hello, ${name}`);
// }

// function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
// }

// processUserInput(greeting);