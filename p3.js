//Question 1
let marks={
    harry:89,
    dhurbe:90,
    mandip:79,
    kuldip:69
}
/*let len = Object.keys(marks);
console.log(len);
console.log(Object.keys(marks)[3]);
*/

for (let i=0; i<Object.keys(marks).length;i++){
    console.log("The marks that",Object.keys(marks)[i],"got is",marks[Object.keys(marks)[i]]);
}

//Question 2
for (let n in marks){
    console.log("the marks that ",n,"got is ",marks[n]);
}
//Question 3

let number=98451731235;
number = number.toString();
do{
    console.log(number.length==10?"It's a phone number":"Try again");

}
while(number.length!=10 && number.length<=10 )  ;
 
//Question 4
const avg4=(a,b,c,d)=>{
    return (a+b+c+d)/4;

}
console.log(avg4(1,5,5,7));