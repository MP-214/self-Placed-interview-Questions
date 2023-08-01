//flatten an array without using inbuilt function

const arr = [1, 2, [3, 4, [5, 6]], 7, 8, 9];

//one level flatten

const res = arr.reduce((acc, val) => acc.concat(val), []);
console.log(res);

//to flat N-level need to call recurrsion

let flatarr = (arr) =>
  arr.reduce((r, e) => {
    return (r = r.concat(Array.isArray(e) ? flatarr(e) : e));
  }, []);

console.log(flatarr(arr));
/***************************************************************************************************** */
//polyfill :is apiece of code where native code run support on old brower and does not
// support the new modern javascript functionalities

//polyfill for forEach map filter reduce

//forEach

const arr2 = [1, 2, 3, 4, 5];
const double = function (x) {
  console.log(x*2);
};

const triple = function (x) {
   return x*3;
  };

Array.prototype.customForeach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};
arr2.customForeach(double);


Array.prototype.customMap=function(callback){  //same for filter and reduce
    const arr=[]
    for (let i = 0; i < this.length; i++) {
       arr.push(callback(this[i]));
      }
      return arr
}

console.log(arr2.customMap(triple))


//polyfill for bind function


const obj={
    name:"mithiles",
    lname:"prajapati"
}

function consolefunc(home,state){
    return this.name+" "+this.lname+" "+home+" "+state
}
//bind takes the copy of the function and return when it is call
//but in case of call and apply it immediately return a function execution once it is attached
const re=consolefunc.bind(obj,"abad")
console.log(re("maha"),"bind")

//to right the polyfill of  bind func


Function.prototype.ourBind=function(...args){
    let obj=this
    params=args.slice(1)
    return function(...args2){
       return obj.apply(args[0],[...params,...args2])
    }
}

const myperson=consolefunc.ourBind(obj,"varanasi")

console.log(myperson("uttarpradesh"))


/***************************************************************************************************** */
//curring fuction
// sum(a)(b)(c)
//way of calling a function which converts  one to n arguments
//1.using bind()
//2.using recusrssion
function addition(a,b){
  return a+b
}
const addby2=addition.bind(this,8)

console.log(addby2(2))

const sum=a=>b=>b?sum(a+b):a

console.log(sum(1)(4)(5)())
/***************************************************************************************************** */

//a=4 b='23' add a number without + operator

const add=(a,b)=>{
  let c=parseInt(b)
  let first=new Array(a).fill(true)
  let sec=new Array(c).fill(true)
  let res=first.concat(sec)
  return res.length

}

console.log(add(4,'23'))
/***************************************************************************************************** */

// reverse a string (only reverse a letters)

const rev=(str)=>{
  return str.split(" ").map((st)=> st.split("").reverse().join("")).join(" ")
}

console.log(rev("hello ,world, $heey"))

/************************************************************************* */
//[1,2,3].add(2).add(3).total()


Array.prototype.myadd=function(a){
let arr=[]
arr.push(a)
return [this.concat(arr).reduce((acc,e)=>acc+e,0)]

}
Array.prototype.total=function(){
  return parseInt(this.toString())
}

const a=[1,2,3].myadd(2).myadd(3).myadd(4).total()
console.log(a)
/********************************************************************* */


//closures

function Outer(){
  var a=10
  return function Inner(b){
   return a+b
  }
}
const outest=Outer()(2)
console.log(outest)


/***************************************************************************************************** */
//what is CallBack function
/**
 * I will call back later
 * A function which passed as argument and called as function finished
 * A callback function executed once the function is finished
 */


function display(cal){
console.log(cal)
}
function calculator(a,b,callback){
  let sum=a+b
  callback(sum)
}
calculator(2,3,display)
/***************************************************************************************************** */

function closures(){
  for (var i=0;i<3;i++){
    setTimeout(() => {
      console.log(i)
    }, 1000);
  }
}
console.log(closures())

//as i is declared as var which is not blocked scope and setTimeout will run once function get executed completely so 
//reference to variable i till the loop is failed so when i=3 loop gets failed and current value of i is 3 so 
//it will point to cuurent vale of i that is 3 and for 3 times


//way-1
function closures1(){
  for (var i=0;i<3;i++){
    function close(x){
      setTimeout(() => {
        console.log(x)
      }, 1000);
    }
    close(i)
   
  }
}
console.log(closures1())


//way-2
function closures2(){
  for (let i=0;i<3;i++){   // here let is blocked scope and after each iteration {i=0} {i=1} {i=2}
    setTimeout(() => {
      console.log(i)
    }, 1000);
  }
}
console.log(closures2())

/***************************************************************************************************** */

//Polyfill for promise.all 

const promiseText=(name,timer)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(name,timer)
    }, timer);
  })

}

console.log(promiseText("hello bro",2000).then((value)=>console.log(value)))

Promise.all([promiseText("helooo",1000),Promise.resolve("hiii")]).then((value)=>console.log(value))

//Polyfill 
const promiseAll=(promise)=>{
let result=[]
return new Promise((resolve,reject)=>{
promise.forEach((p,i)=>{
  p.then((res)=>{
    result.push(res);
    if(i===promise.length-1){
      resolve(result)
    }
  }).catch((err)=>reject(err))
})
})
}
/******************************************************************************************************************* */
//flatten an object inside a array Asked in Zimperium
/***
 [{
    "foo": "bar",
    "child": {
      "foo2": "bar2",
      "foo3": [0, 1, 2]
    },
  }
]
//output  
{
  "foo": "bar",
  "foo2": "bar2",
  "foo3": [0, 1, 2]
}
 * 
 * 
 */

const arrObj= [{
  "foo": "bar",
  "child": {
    "foo2": "bar2",
    "foo3": [0, 1, 2]
  },
}
]
//convert to proper json
let arrObj1=[{
	foo:"bar",
	child:{foo2:"bar2",foo3:[1,2,3]}

},{
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91-999999999,
  mentor: {
      HTML: "GFG",
      CSS: "GFG",
      JavaScript: "GFG"
  }
}]

const flattenObj = (ob) => {
 
  let result = {};

  for (const i in ob) {      
      if ((typeof ob[i]) === 'object' && !Array.isArray(ob[i])) {
          const temp = flattenObj(ob[i]);
          for (const j in temp) {
              result[j] = temp[j];
          }
      }
      else {
          result[i] = ob[i];
      }
  }
  return result;
};



console.log(flattenObj(arrObj1.map((e)=>e)))

