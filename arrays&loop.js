let arr=[ 35 ,8,9,80];
let newArr=arr.map((value)=> {
   return (value*2);
})
console.log(newArr);
let arr2=arr.filter((a)=>{
   return a%2==0;

});
console.log(arr2);
 let arr3=arr.reduce((a,b)=>{
   return a-b;

 });
 console.log(arr3);