//Basics
var number = 5;
//comment
/*
multi line comment
*/
var myname= "Bhavyen Mehta";//global variable


let ourname= "free code camp";//local variable

const pi=3.14;//constant
/*semi colons are not a requirement but its 
good practice to write them anyway
*/
var a;
a=5;
console.log(a);//the print function of javascript
/* Data types:
undefined, null, boolean, string, symbol,number and object
*/
var j;//This is undefined
var k=null;//This is null
var a=2;//Number
var b=4;
var c="My name is";//String


a=a+1;
b=b+2;
c=c+"Bhavyen";//arithmatic operations work on strings by default(string concatenation)

console.log(c);

//Compound Assignment
//Same as C
a+=4;  a-=5;
a*=3;  a/=9;
    a%=2;
//you can also concatenate strings using compound assignment 
 
//Escape Sequences
//Same as C
var str="string symbol \"";
//you can use both single and double quotes using another form of string
var str2=`single quote ' double quote" `;


//List of Escape Sequences
/*
\' Single Quote
\" Double Quote 
\\ Backslash
\n Newline
\r Carriage Return
\t Tab
\b Backspace
\f Form Feed
Pretty much the same as C
*/
var ex= "newline \nnew line";

//Length of a String
Syntax: integer_variable = string_variable.length;

//Strings are treated as array of characters
var N="Bhavyen";
console.log(N[0]);
//Strings are immutable
N[0]="C"//This does not work
N="Chavyen"//This works
var name="Bhavyen";
var l= name[6];
console.log(l);//This prints n


//Arrays can store multiple datatypes
var aa=["bhavyen", 19]
console.log(aa[0])
console.log(aa[1])
//Multi-Dimensional array
var ourarray= [["Bhavyen",19],["mehta",42]]

//push() function
//It is used to append an array
var myarray=["Bhavyen","Mehta"]
myarray.push("Batman")
//The final array is = ["Bhavyen", "Mehta","Batman"]

//pop() function
//Used to remove the last element of an array
var k=[1,2,3]
var o= k.pop();//returns the last element
console.log(o)

//shift() function
//Same as pop() except removes the first element
var k=[1,2,3]
var o= k.pop();//returns the first element
console.log(o)

//unshift() function
//Same as push except the new element is added in the beginning of the array
var myarray=["Bhavyen","Mehta"]
myarray.unshift("Batman")
console.log(myarray)
//The final array is = ["Batman,"Bhavyen", "Mehta"]

//User-defined funtions
function basic()
{
    console.log("Hello")
}
basic();
//With arguments
function addition(a,b)
{
    console.log(a+b)
}
addition(2,3);

function bkl()
{
    var ljh=10;//Local Variable
}
var jhg;//Global variable

//typeof
//its a keyword used to determine the data type of a variable
var a=0;
if(typeof a=="number")
{
    console.log("Success")
}

//Variabes dont necessarily need the var or let keyword
aa=10;//Becomes global by default
//Having var limits the scope to its block or function
console.log(aa);

//JSON.stringify(arr_name)
var arr=[1,2,3,4];
var str=JSON.stringify(arr);
var temp=str[1]+str[3];//note 1 and 3 are used cozz it stringifies everything including [ and ,
console.log(temp); 

//Boolean data type only has two values:
//True or False

//Comparison Operators
/*
->  ==
->  !=
->  === (Strict Equality)
->  !== (Strict Inequality)
->  >=
->  <=
->  >
->  <

*/


var i=3;
if(i==='3')//The ouput is Nope
{
    console.log("Yup")
}
else
{
    console.log("Nope")
}

var i=3;
//Normal equality converts the type from int to char
if(i=='3')// The ouput is Yup
{
    console.log("Yup")
}
else
{
    console.log("Nope")
}

//Logical operators (&& and ||)
var num=13;
if(num>10 && num<15)
{
    console.log(num)
}

//Switch Statement
//Syntax is same as C
var val=1;
switch(val)
{
    case 1:
        console.log("1")
        break
    case 2:
        console.log("2")
        break
    default:
        console.log("Default")
        break

}
//multiple cases with the same input
switch(val)
{
    case 1:
    case 2:
    case 3:
        console.log("LOL")
    default:
        console.log("Default")
        break

}

//JavaScript Objects
//They are similar to arrays except you use properties instead of indexes to access different elements
var ourdogs={
    "name":"Camper",
    "legs": 4,
    "trails": 1,
    "friends": ["everything"],
    "his drink": "water"
};
//You access these properties using the dot operator
console.log(ourdogs.name)
//Another method of accessing these properties
console.log(ourdogs["his drink"])
//console.log(ourdogs.his drink) this doesn't work cozz of the space between his and drink

//Changing properties
ourdogs.name="Tommy"

//Adding properties
ourdogs.bark="Bow"
//bark is added as a property

//Deleting properties
delete ourdogs.bark;
//bark is deleted

//Checking whether an object has a particular property or not
ourdogs.hasOwnProperty(gg)
//return either true or false
//Therefore

if(ourdogs.hasOwnProperty("gg"))
{
    console.log("It does")
}
else
{
    console.log("It doesn't")
}
//Javascript objects are flexible i.e they can store anything (strings,numbers, arrays etc even another object)
var Storage={
    "car":{
        "inside":
        {
            "glove box":"maps"
        },
        "outside":
        {
            "trunk":"jack"
        }
    }
}
var mystorage=Storage.car.inside["glove box"]
console.log(mystorage)

//arrays have [] bracket whereas objects have {} bracket

//While Loop
var arr=[1,2,3,4]
var i=0;
while(i<4)
{
    console.log(arr[i])
    ++i;

}

//For Loop
for(var j=0;j<3;++j)
{
    arr.push(j)
}
for(var i=0;i<7;++i)
{
    console.log(arr[i])
}

//Do-While Loop
var i=0
do
{
    
    console.log(arr[i])
    ++i

}while(i<4)

//Random Function
//This function generates random function
console.log(Math.random())

//Random Whole Numbers
var ran=Math.floor(Math.random())
//Math.floor rounds down to the nearest whole number
//However since random generates fractions it will always round down to 0
//So we multiply random fration by a random number
var ran=Math.floor(Math.random()*10)

//Generating random whole numbers in a given range
var max=10;
var min=5;

var ran= Math.floor(Math.random() * (max-min+1)) + min;
console.log(ran)
//Logic:
/*
-> random() gives a fraction
-> it is multiplied by max - min +1
-> +1 is there to include the highest number of the given range (in this case 10)
-> max-min+1 = 6 in this case. it doesnt give a number above 10 cozz random gives a fraction which means the product is less than 6 (then rounded down by floor())
-> we add min to bring the final answer in the given range
*/

//parseInt function
//It converts string to integer
//If it cant then it returns NaN (Not a Number)
var str="10"
var num=10*parseInt(str)
console.log(num)
//parseInt also has radix value 
console.log(parseInt(str,2))
//It treats 10 as binary i.e 1 0  and returns 2 in this case

//Ternary operator
var con=10;
con==10 ? console.log("true"): console.log("false")

//Nesting of Ternary operator
con>0 ? console.log("positive"): con<0 ? console.log("negative"): console.log("zero")

//variables can be declared in multiple ways
//we can use let,var and const
//Difference 1
//difference between var and let is that let doesnt let you declare a variable twice in the same scope
var name="bhavyen"
var name="mehta"
console.log(name)//displays mehta

let myname="bhavyen"
let myname="mehta"
console.log(myname)
//shows an error: SyntaxError: Identifier 'myname' has already been declared
//Another difference is that var declares a global variable or a local one if inside a function
//Whereas let declares a variable limited to the particular block in which it is declared

function checkscope()
{
    var i="function scope"
    if(true)
    {
        i="block-scope"
        console.log("Block scope: "+i)

    }
    console.log("function scope: "+i)
}
checkscope()
//both display block scope

function checkscope()
{
    let i="function scope"
    if(true)
    {
        let i="block-scope"
        console.log("Block scope: "+i)

    }
    console.log("function scope: "+i)
}
checkscope()
//displays block scope and function scope
//let is local to the block to which it is declared in

//const is used to declare constants i.e Read Only Variables
//const only block variable redeclaration but we can still update a variable 
//we just can't redeclare it
const l="batmna"
l="gg" //shows error

//Usually only let is used 
//var is only used in certain situations

//Arrays become mutable
const s=[1,2,3]
s=[4,5,6]//Shows error 
//but we can update the array
s[0]=7
s[1]=8
s[2]=9
console.log(s)
//This doesn't show any errors

//const cant protect data as we can still indirectly change it 
//So in order to prevent any changes we use freeze in objects
const math_constants={
    PI: 3.14
}
math_constants.PI =99;
console.log(math_constants.PI)
//displays 99
//to protect PI we use freeze

const math_constants={
    PI: 3.14
}
Object.freeze(math_constants)
math_constants.PI =99;
console.log(math_constants.PI)
//Displays 3.14
//But it does not show an error

//Annoymous functions
//Keep in mind 4 factors
//variable
//no name given to the funciton
//no need to return and have any curly braces\
//=()=>
//Q since the variable has a function does it allocate mem according to int,char etc?
//even if it does what is its value? (like 1 byte maybe)
var magic = function(){
    return 7;
}
//Arrow functions
var magic = () => {
    return 7;
}
//even more optimised
var magic = () => 7

//arrow functions with arguments
var myconcat= function(arr1,arr2) {
    arr1.concat(arr2)
}

var myconcat= (arr1,arr2) => arr1.concat(arr2)

//learn filter and map function from somewhere else

//Default Arguments
function n(i=1)
{
    return i
}
console.log(n(5))//Displays 5
console.log(n())//Displays 1

//Rest Operator: ...
//We use it for variable number of arguments
//it creates an array called args containing the arguments
function lol (... arr)
{
   
    return arr
}
console.log(lol(1,2,3))
console.log(lol(4,5,6,7,8,9))


//Spread Operator
arr1=[1,2,3,4]
arr2=arr1;
arr1[0]=6
console.log(arr2)
//displays 6,2,3,4

//if we use spread
arr2=[...arr1]
arr1[0]=6
console.log(arr2)
//displays 1,2,3,4

//Destructuring Assignment
//Easier way of assigning object members to variables
//This is how it is normally done
var obj={
    x:1,
    y:2,
    z:3
}

var x=obj.x
var y=obj.y
var z=obj.z

//Instead we can do
var{ x:a, y:b, z:c}=obj
console.log(a +""+ b+"" + c )

//Using Destructing assignment on nested objs

const l={
    today: {min:72},
    tomorrow: {min:45}
}
const {today :{min:b}}=l
console.log(b)
//displays 72

//Using Destructing assignment on arrays
var [a,b, , ]=[1,2,3,4]
console.log(a)
console.log(b)

//Using Destructing assignment on rest
var arr=[1,2,3,4]
var [, , ...pls]=arr
console.log(pls)

//Using Destructing assignment on passing objects as argument
//didnt understand

/*
Concepts
-> Promises are objects that were created to prevent callback hell i.e nesting of callback functions

-> A promise has 2 results:
Resolve
Reject

->Resolve kinda represents the success of a promise. If a promise succeeds then execute some other code. That's why we use then().We take an argument and write a function that is executed if the promise is a success i.e resolved. If it is failed i.e rejected it executes the catch function.

*/
let promise = new Promise((resolve,reject) => {
    let a=2;
    if(a==2)
    {
        resolve('Success')
    }
    else
    {
        reject('failed')
    }
})
//then() -> For resolve
//catch() -> For rejects
promise
.then((msg)=>{
    console.log('this is a(in then()): '+msg)
})
.catch((msg) =>
{
    console.log('this is a(in catch()): '+msg)
})
/* Promise Methods */
//Promise.all([promise1,promise2,promise3])
//Completes all promises at the same time
const t1 = new Promise((resolve,reject) =>{
    resolve('t1 complete')
})
const t2 = new Promise((resolve,reject) =>{
    resolve('t2 complete')
})
const t3 = new Promise((resolve,reject) =>{
    resolve('t3 complete')
})
Promise.all([
    t1,
    t2,
    t3
]).then((msg_temp) => {
    console.log(msg_temp)
})
//Promise.race() returns the fastest output

/* Async and await */
//It is an alternative to nesting of then() in promises
//The code seems as if it was written synchronously
function promise_temp()
{
    return new Promise((resolve,reject) => {
        let a=2;
        if(a==2)
        {
            resolve('Success')
        }
        else
        {
            reject('failed')
        }
    }) 
} 
const lamo = async () => {
    try{
    const first_promise = await promise_temp();
    console.log("hello")
    const second_promise = await promise_temp();
    console.log(first_promise,second_promise)
    }
    catch(err)
    {
        console.log(err)
    }
    
}
lamo();











