console.log("helo world");
let a = "hello"; //can change during runtime
const b = "hello"; //cannot change during runtime
//object
const item = {
  Harry: "programmer",
  " John": "computer programmer",
};
let num1 = 1;
let num2 = 2;
let num3 = num1 + num2;
//prompt based input run in browser
//let i=prompt("please give some input")
let i=0
console.log(typeof i)//check type of the data type in the variable
x=Number.parseInt(i);//type casting 
//alert(typeof x) //work in browser
//alert("message")
if (num1==0) {
    console.log("helo world");
    
} else if (num1==1) {
    console.log("helo " + num1);
} else {
    console.log("helo");
}

//for loop
for (let i = 0; i < 7; i++) {
    console.log(`message`);
 }
 //for in loop 
 for (let property in item ) {
   console.log(property);
    ;
 }
 //let scope is only limited to a block outside that block it will not be accessible
 //for of
 //used for arrays
 for (let b of "harry" ) {
   console.log(b);
   
    ;
 }
 let k =0
 //while loop fist condition check then run 
 while (k <4) {
   console.log(k);
 k++
    ;
 }
 //first run then check condition 
 do {
   console.log(`i`);
   i++
    ;
 } while (i<7);
 //function
 function functionName(x,y) {
   console.log(`done`);
    return x+y;
 }
 //function call
 console.log(functionName(5,6));
 //arrow function
 
 const sum =()=>{
   return 5
   }
 console.log(sum());