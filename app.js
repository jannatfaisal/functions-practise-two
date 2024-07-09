// FUNCTIONS  CHP   35


// function sayHello(){
//     alert("Hello,world");
// }

// function saygoodbye(){
//     alert("goodbye, world");
// }









// function makejuice(fruit) {
//     return fruit +'juice';
// }


// // FUNCTION CALL

// let Mangojuice = makejuice('Mango' + "<br>");
// document.write(Mangojuice);


// let orangejuice = makejuice('orange' + "<br>");
// document.write(orangejuice);


// function make_barbq(kabab){
//     return kabab + "spicy";
// }


// let beefkabab= make_barbq(' beef kabab'+ "</br>");
// document.write(beefkabab);
// // console.log();

// let chicken_boti= make_barbq(" chicken boti"+"<br>");
// document.write(chicken_boti);

// let with_colddrink = make_barbq("with pepsi" +"<br>");

// document.write(with_colddrink);


// function barbq_plane(barbq){

    // console.log(" your order is ready with beef burger and " + beef +   "with chicken burger" + chicken);
    // console.log("Hello, " + name + "! You are " + age + " years old and live at " + address + ".");
// }


// let beef = prompt("which one is like u? beef burger or beef boti");
// let chicken= prompt("which one is like u? chicken burger or chicken boti");

// barbq_plane(beef,chicken);




// shopping list function 


// let shoping_list = [];

// function add_item(item) {
//     shoping_list.push(item);

//     console.log(item  + " " + 'added  to the shopping list.');
    
// }

// function display_item() {
//     console.log("shoping list:");

//     shoping_list.forEach(item => {
//         console.log("-"  + item);
//     });
// }


// add_item('apple');
// add_item("mango");

// add_item('milk');
// add_item("bread");

// add_item('egg');
// add_item("juice");

// add_item('cake');
// add_item("cup cakes");

// display_item();


// let shopiing_list=[];
 
// function add_list(list){
//     shopiing_list.push(list);
//     console.log()
// }

// function display_item(){
//     console.log(shoppinglist);
// }


// function name(jannat){
//     alert(jannat);
// }


// name("nice name");

// OBJECTS

// function printperson(person) {
//     console.log(person.name + " is " + person.age + " years old.");
// }

// let person = {name: "jannat", age:20};
// printperson(person);


// function printperson(person) {
//     console.log(person.name +  " is "  + person.age + " years old.");
// }

// let person={name: "jannat", age:20};
// printperson(person);


// function printperson(person) {
//     console.log(person + " is " + age + " years old  and she is" + profession + ".");
// }

// let person = prompt("what is your name?");
// let age= prompt("what is your age?");
// let profession= prompt("what is your profession?");

// printperson(person);



// BOOLEAN 

// function isadult(age) {
//     return age >= 18;
    
// }

// console.log(isadult(20));

// function isAdult(age){
//     return age >= 20;
// }
// console.log(isAdult(21));


// function isAdult(age) {
//     return age >= 18;
//   }
  
  // Function ko call karte waqt uski return value ko console.log mein print karen
//   console.log(isAdult(20));


// function sumarray(numbers) {
//     let sum = 0;

//     for (let num of numbers);{
//     sum  += num;
// }


// return sum;
  
// }

// let numbers=[1,2,3,4,5];
// sumarray(numbers);

// function sumArray(numbers) {
//     let sum = 0;
//     for (let num of numbers) {
//       sum += num;
//     }
//     return sum;
//   }
  
//   let numbers = [1, 2, 3, 4, 5,17];
//   sumArray(numbers); // Argument: [1, 2, 3, 4, 5]

//   console.log(sumArray(numbers))


// function sumarray(numbers){
//     let sum = 0;
//     for (let num of numbers){
//         sum += num;
//     }
//     return sum;
// }
// let numbers=[4,5,3,2,1];
// sumarray(numbers);

// console.log(sumarray(numbers));




// function greetuser(name,age,address,status){
//     console.log("Hello," + name + "! you are" + age +"years old and live at"  + address +   +  status + "wow you are single.");
// }

// let name = prompt(" what is your name?");
// let age = prompt("what is your age?");
// let address = prompt( "what is your address?");
// let status = prompt("what is your current status?");


// greetuser(name,age,address,status);



// function greetUser(name, age, address) {
//     console.log("Hello, " + name + "! You are " + age + " years old and live at " + address + ".");
// }

// Prompt user for their details
// let name = prompt("What is your name?");
// let age = prompt("What is your age?");
// let address = prompt("What is your address?");

// Call the function with user input and print the greeting
// greetUser(name, age, address);

  
