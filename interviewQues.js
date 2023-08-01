// Lenskart coding ques only 1st 2

function isInt(num){
    if(isNaN(num))
    {
        return false

    }else{
        const a=parseFloat(num)
        return (a|0)===a
    }
}
console.log(isInt(4.4))//false
console.log(isInt(2))//true

// [1,2,3,4,0],6==>[[2,4]] sum of 2 nos equal to target

const twoSum=function(arr1,target){
    const arr=[...new Set(arr1)]
    const ob={}
    const res=[]
    for(let i=0 ;i<arr.length;i++){
        const diff=target-arr[i]
        if(diff in ob)  res.push([arr[i],arr[ob[diff]]])
        ob[arr[i]]=i
    }
    return res

}
console.log(twoSum([1,2,3,4,6,0],6))
console.log(twoSum([1,2,3,4,6,20,19,1,0,18,2,9,11,15,5],20))


/*************************************************************************************************/


//optimize a function

function multiple(num1,num2){
    for(let i=0 ;i<10000000;i++){
        return num1*num2
    }
}

console.time("timer1")
console.log(multiple(255,234))
console.timeEnd("timer1")
console.time("timer2")
console.log(multiple(255,234))
console.timeEnd("timer2")


const memoizefunction= function(func,context){
    const res={}
   return function (...args){
    var argsCahe=JSON.stringify(args)
    if(!res[argsCahe]){
        res[argsCahe]=func.call(context|| this,...args)

    }
        return res[argsCahe]
    

   }

}
const memoized=memoizefunction(multiple)

//res ={"5,6":30}
console.time("t1")
console.log(memoized(5,6))
console.timeEnd("t1")
console.time("t2")
console.log(memoized(5,6))
console.timeEnd("t2")
/******************************************************************** */


// const res=cal.add(5).multiply(10).substract(20).add(10);
// console.log(res.total)
const cal={
    total:0,
    add(a){
        this.total+=a;
        return this
    },
    multiply(a){
        this.total*=a;
        return this;
    },
    substract(a){
       this.total-=a;
       return this
    }
}

const result=cal.add(5).multiply(10).substract(20).add(10);
console.log("total",result.total)

/******************************************************************** */
//what is event delegation
// suppose we have bunch of product on e-commerce website so to add product we need to perform click events on each product so,
// to avoid adding same event listener on each product we can add event listener on its parent element.
// so adding event to parent can have access to its child element
// from which we can save memory .

document.querySelector("#products").addEventListener('click',(e)=>{

    if(e.target.tagName==="LI"){

        window.location.href="#"+e.target.id
    }
})


/******************************************************************************************* */

//Composition Function

function addition(a){
    return a+2
}
function sub(a){
    return a-2
}
function mul(a){
    return a*2
}

// const evaluate=composeFunc(add,sub,mul)
// console.log(evaluate(5))

const composeFunc= (...functions)=>{
   
    return (args)=>{
  return functions.reduceRight((arg,fn)=>fn(arg),args)
    }

}
const evaluate=composeFunc(addition,sub,mul)
console.log(evaluate(5))