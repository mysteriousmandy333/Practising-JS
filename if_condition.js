let age = prompt("What is your age ?");
age = Number.parseInt(age);
console.log("Your age is ",age);
// var age = 25; // Assuming 'age' is a variable representing the age of the person

if (age < 0) {
    alert("Age not valid");
} 
else if (age >= 0 && age < 5) {
    alert("Enjoy your childhood");
}
 else if (age >= 5 && age < 15) {
    alert("Seems like you are in your school life");
}
 else if (age >= 18 && age < 60) {
    alert("Okay, you are a responsible citizen");
}
 else {
    alert("Age not matched with any condition");
}
