let arr=[1,2,3,4,5,6,7,8,9,0];

// let result=arr.findIndex(function(item){
//     return item>25;
// });
// let arr=[]
// console.log(result);

for(let [key,values] of arr.entries()){
  console.log(key,values);
}

let name="z张";
let result = `姓名：${name.repeat(3)} zzzz`
console.log(result);

let a=2;
let b="zs";
let obj={
  a,b
}
console.log(obj);
