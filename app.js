//! Chapter 17-20


//? Quetion 1

// var emptyArray = [];

// for (var i = 0; i<3;i++){
//     row = [];
//     for (var j = 0;j<3;j++){
//         row.push(null);
//     };
//     emptyArray.push(row);
// };
// console.log(emptyArray);


//? Quetion 2

// var Array = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// for (var i = 0; i<4; i++){
//     row = Array[i];
//     for (var j = 0; j<4;j++){
//         document.write(row[j]);
//     }
//     document.write("<br>");
// }


//? Quetion 3

// for (var i =1;i<=10;i++){
//     document.write(`${i} <br>`);    
// }

//? Quetion 4

// var userNumber = +prompt("Enter a number for table: ");
// var userTable = +prompt("Enter a table count: ");

// for (let i =1;i<=userTable;i++){
//     document.write(`${userNumber} * ${i} = ${userNumber*i} <br>`);

// }


//? Quetion 5


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// fruits.forEach(element => {
//     document.write(`${element} <br>`);
// });
// fruits.forEach(e=>{
//     document.write(`Element at index ${fruits.indexOf(e)} is ${e} <br>`)
// });


//? Quetion 6


// var Coutning = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var reverseCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var Even = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// var Odd  = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// var Series = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];

// document.write("Coutning\n")
// Coutning.forEach(e=>{
//     document.write(`${e} `)
// })
// document.write("<br>")

// document.write("reverseCounting\n")
// reverseCounting.forEach(e=>{
//     document.write(`${e} `)
// })
// document.write("<br>")
// document.write("Even\n")
// Even.forEach(e=>{
//     document.write(`${e} `)
// })
// document.write("<br>")
// document.write("Odd\n")
// Odd.forEach(e=>{
//     document.write(`${e} `)
// })
// document.write("<br>")
// document.write("Series\n")

// Series.forEach(e=>{
//     document.write(`${e} `)
// })


//? Quetion 7

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let user = prompt("Enter what do you want: ")

// var isPresent = false;

// for (let i =0 ; i<A.length;i++){
//     if (user === A[i]){
//         isPresent = true;
//         var found = A[i]
//     }
// }

// if(isPresent){
//     document.write(`${found} is present at index of ${(A.indexOf(found)+1)} in our bakery`)
// }
// else{
//     document.write(`We are sorry. ${user} is <b>not available</b> in our bakery`);
// }




//? Quetion 8

// var A = [24, 53, 78, 91, 12];
// var a = 0;
// for (var i = 0; i<A.length;i++){
//     if (A[i]>a){
//         a = A[i]
//     }
// }
// document.write(`The largest number is ${a}`);


//? Quetion 9

// var A = [24, 53, 78, 91, 12];

// var a = A[0];
// for (var i = 0; i<A.length;i++){
//     if (A[i]<a){
//         a = A[i]
//     }
// }
// document.write(`The Smallest number is ${a}`);

//? Quetion 10

// var user = +prompt("Enter number: ");

// for (let i =1; i<=100;i++){
//     if (i === 100){
//         document.write(`${user*i}`)
//     }
//     else{
//         document.write(`${user*i},`)
//     }
// }


//! Chapter 21-25

//? Quetion 1

// var fname = prompt("Enter your first name: ")
// var lname = prompt("Enter your last name: ")

// var fullName = fname.concat(` ${lname}`);

// document.write(`Hi ${fullName}`);


//? Quetion 2

// var user = prompt("Enter your favourite phone mobile number: ");

// document.write(`My favourite phone is ${user}`);      
// document.write(`Number of characters ${user.length}`);      

//? Quetion 3
// var string = "pakistani";

// document.write(string.indexOf('n'))


//? Quetion 4

// var string = "pakistani";

// document.write(string.lastIndexOf("k"))

//? Quetion 5

// var string = "Pakistani";

// document.write(string[3]);

//? Quetion 6

// var fname = prompt("Enter your first name: ")
// var lname = prompt("Enter your last name: ")

// var fullName = fname.concat(` ${lname}`);

// document.write(`Hi ${fullName}`);

//? Quetion 7

// var string = "Hyderabad";

// document.write(string.replace("Hyder","Islam"));


//? Quetion 8

// var message = "Ali and Sami are best friends. They play cricket and football together";
// let arr = message.split(' ')
// for (let i =0;i<message.length;i++){
//     if(arr[i] === "and"){
//         arr[i]="&"
//     }
// }

// document.write(arr.toString());

//? Quetion 9

// var num ="42"
// document.write(num);
// document.write(typeof(num));

// var newNum = parseInt(num)
// document.write(newNum);
// document.write(typeof(newNum));

//? Quetion 10

// var string = prompt("Enter: ");

// document.write(`User input: ${string} <br>`);
// document.write(`Upper Case: ${string.toUpperCase()}`);

//? Quetion 11

// var string = prompt("Enter: ");

// document.write(`User input: ${string} <br>`);
// document.write(`Title Case: ${string[0].toUpperCase()}${string.slice(1)}`);


//? Quetion 12

// var num = 35.56;
// var str = num.toString()
// str = str.split(".");
// document.write(String(str[0])+String(str[1]));

//? Quetion 13

// var arr = ["@",",",".","!"];

// var user = prompt("Enter name: ");
// var isFound = false
// for (let i = 0;i<user.length;i++){
//     for(let j = 0;j<arr.length;j++){
//         if (arr[j] === user[i]){
//             isFound = true
//         }
//     }   
// }
// if(isFound){
//     alert("Enter a valid name")
// }

//? Quetion 14

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let user = prompt("Enter what do you want: ")

// var isPresent = false;

// for (let i =0 ; i<A.length;i++){
//     if (user === A[i]){
//         isPresent = true;
//         var found = A[i]
//     }
// }

// if(isPresent){
//     document.write(`${found} is present at index of ${(A.indexOf(found)+1)} in our bakery`)
// }
// else{
//     document.write(`We are sorry. ${user} is <b>not available</b> in our bakery`);
// }

//? Quetion 15

// var user = prompt("Enter password");

// if (!(0 <= user[0] <= 9)) {
//     if (/[a-zA-Z]/.test(user)) {
//         for (let i = 1; i < user.length; i++) {
//             if(0 <= user[i] <= 9)[
//                 console.log("Done")
//             ]

//         }
//     }
// }
// else {
//     console.log('trueHe;')

// }

//? Quetion 16


// var university = "University Of Karachi";

// var arr = university.split(" ");

// for (let i = 0;i<arr.length;i++){
//     for (let j=0; j<arr[i].length;j++ ){
//         document.write(`${arr[i][j]} <br>`)
//     }
// }


//? Quetion 17

// var str = prompt("Enter input: ");

// document.write(`last character of input is ${str.charAt(str.length-1)}`);


//? Quetion 18

// var sum = 0,
// sentence = "ss sss as ad",
// sentence = sentence.split()
// for (let i =0;i<sentence.length;i++){
//     for (let j = 0;j<sentence[i].length;j++){
//         if(sentence[i][j] === "s" || sentence[i][j] === "S")
//         sum += 1
//     }
// }
// document.write(`The number of s in a sentence is ${sum}`)

