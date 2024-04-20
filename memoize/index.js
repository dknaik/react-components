// console.log("hi")
// const addThreeItems = (a,b,c)=>a+b+c
// const add=addThreeItems(1,2,3)
// console.log(add())
// // console.log(add)

// used to reduce time-consuming calculations
//  by saving inout to something called cache
//   and returning the result from it.

// let sum = 0;
// const calc = (args) => {
//   console.log("args in calc", args);
//   const [a, b, c] = [...args];
//   const sum = a + b + c;
//   console.log("sum", a, b, c, sum);
//   //   }
//   return sum;
// };
// const memoize = (fun) => {
//   let cache = {};
//   return function (...args) {
//     console.log("args", args);
//     let key = args.join("_");
//     if (key in cache) {
//       return cache[key];
//     } else {
//       console.log("calculating first time");
//       let result = fun(args);
//       cache[key] = result;
//       return `${key} ---> ${result}`;
//     }
//   };
// };
// console.time();
// const efficient = memoize(calc);
// console.log("res--->", efficient(1, 2, 3));
// console.timeEnd();


// const arr=[1,2,3,4,5,2,4]
// let found=false;
// for(let i=0;i<arr.length;i++){
  
//   if(arr[i]==2 && !found){
//     arr.splice(i,1,90)    
//     found=true

//   }
// }
// console.log(arr)


const arr = [1,2,3,4,5,6,6]
const Obj = {}
for(let key in arr){
  // console.log(`${key} : ${arr[key]}`)
   if(Obj[arr[key]]){
    Obj[arr[key]]= Obj[arr[key]]+1
   }else{
    Obj[arr[key]]=1
   }
}  
console.log(Obj)

