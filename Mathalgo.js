// Fiboncii, Prime ,Power


//
function Fibonacci(n){
    let first=0
    let second=1
    let temp
    while(n>1){

  temp = first+second
  console.log(first)
   first=second
   second=temp
   n=n-1

}
   

}

console.log(Fibonacci(13))

function recursiveFib(n){
//base condition
if(n<=1)
  return n;
while (n>0){
    return recursiveFib(n-1)+recursiveFib(n-2);
}

}

console.log(recursiveFib(8))


function fib(n){
    //fib(2)=[0,1]
    //fib(3)=[0,1,1]

    let f=[0,1]
    for(let i=2;i<n;i++){
        f[i]=f[i-1]+f[i-2]
    }
    return f
}
console.log(fib(7))