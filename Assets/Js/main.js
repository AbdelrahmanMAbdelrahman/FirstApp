


// let myPromise=new Promise((res,rej)=>{
//     let suc=true;
//     suc?res("operations completed successfully"):rej("error handling operations");
// });

// myPromise.then(res=>{console.log(res);})









// let promise=new Promise((resolve,reject)=>{
//     let isOnline=true;
//     if(isOnline){
//         resolve("the person is online now ");
//     }
//     else {reject("the person is offline now");}
// });

let numbers=[1,2,3,4,5,6];
let newNums=numbers.map(double);
let evens=numbers.filter(filtr);
let total=numbers.reduce(sum);
function sum(prev,cur){
    return prev+cur;
}
console.log(total);
console.log(...evens);
function filtr(num){
    return num%2===0;
}
function double(x){return x*2;}
console.log(...newNums);
numbers.forEach(printNumbers);
function printNumbers(num){console.log(num);}

let sortedNumbers=numbers.sort(sortList);
function sortList(prev,cur){
    return cur-prev;
}

console.log(...sortedNumbers);
