// Question 1

let age = prompt("Enter your age");
age =Number.parseInt(age);
if(age>=18 && age<70){
    alert("You can drive");
}
else if(age<18 && age >0){
    
    alert("You can't  drive");
}
else{
    alert("Enter the correct age");
}

//question 2
var a=confirm("Do you want to see the prompt again?")
while(a==true){
    let age = prompt("Enter your age");
    age =Number.parseInt(age);
    if(age>=18 && age<70){
        alert("You can drive");
    }
    else if(age<18 && age >0){
        
        alert("You can't  drive");
    }
    else if (age<0){
        alert("Enter the valid age");
        break;
    }
    var a=confirm("Do you want to see the prompt again?")
};
//question 4
if (age>4){
    location.href="https://google.com"
}
let color= prompt("WHat color should the background be?")
document.body.style.background=color;