/*let nam="89";
let a = Number.parseInt(nam);
// a= "Mandip";
console.log(typeof a);
console.log( a + 80);
*/
//Question 1

let age= 78;
if (age>10 && age<20){
    console.log("Your age lies between 10 and 20 ");
}
else{
    
    console.log("Your age doesn't lie between 10 and 20 ");
}

//Question 2
let fruit = " Banana";
switch (fruit){
    case "mango":
        console.log("Not a banana");
        break;
    case " Banana":
        console.log("It is a banana");
        break;
    default:
        console.log("It's another fruit");
}

//Question 3
let num = 78 
if (num%2==0 && num&3==0)
{
    console.log("Given number is divisible by 2 and 3 ")
}
else
{
    console.log("Given number is divisible by 2 and 3 ")
}
//Question 4
num =21
if (num%2==0 || num&3==0)
{
    console.log("Given number is divisible by 2 or  3 ")
}
else
{
    console.log("Given number is divisible by 2 or  3 ")
}

//Question 5
let driver= 9 ;
console.log(driver>18?"You can drive":"You can't drive ");