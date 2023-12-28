//Self done task 

let num=9;
let h=num;
let factorial=1;
for(let j=1 ;j<=h;j++){
    factorial*=j;
    // num-=1;
    console.log(factorial);
}
console.log("The factorial of given number is ",factorial);

// For - in- loops
 
let marks={
    ram: 78,
    hari: 88,
    shyam:89,
    mandip:79
};

for(p in marks){
    console.log(p ,"got ",marks[p]);

}
//for-of - loop

let eng=["Ram","Hari"]
for (let i of eng)
{
    console.log(i);
}