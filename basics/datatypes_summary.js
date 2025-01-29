/*
all the datatypes are divided into two types 
1.primitive datatype
2.non primitive datatype  or refrrence type 


1. primitive data types 
these are 7 types  all these are call  by value 
*string
*number
*booolean 
*null
*undefined 
*symbol used to make a value unique 
*big int  noting but used for large values or big int */
const score= 100
const scorevalue =100.3

const isloggedin=false 
const outsidetemp= null
let userEmail= undefined

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id===anotherid);
const bigNumber=265265634654545




/*
***remember****
 JavaScript is dynamically typed


2. refrence type or non primitive data type
*array
*objects
*functions 
*
*/
const heros =["iron man","captain america","thor","loki"]

let obj ={
    name: "muheet"

}

const myfunction    =function(){
    console.log("hello world")
}
 // in order to check the datatype of any variable we use typeof 

 //Return type of variables in JavaScript

 /*
1) Primitive Datatypes
Number => number
String  => string
Boolean  => boolean
null  => object
undefined  =>  undefined
Symbol  =>  symbol
BigInt  =>  bigint

2) Non-primitive Datatypes
Arrays  =>  object
Function  =>  function
Object  =>  object
*/
/*
JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.*/