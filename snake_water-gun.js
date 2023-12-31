
let cpu =Math.floor(Math.random()*3);
// console.log(cpu);
let def_value=[ "R","P","S"];
let score=0;
const logic =(user , def_value,cpu)=>{
    if (user===def_value[cpu]){
        alert("Oh ! same choice");
        return 0;
    }
    else if(user==="R" && def_value[cpu]==="P"){
        alert("Alas");
        return 0;

    }
    else if(user==="R" && def_value[cpu]==="S"){
        alert("Bravo");
        return score++;
    }
    else if(user==="S" && def_value[cpu]==="P"){
        alert("Bravo");
        return score++;
    }
    else if(user==="S" && def_value[cpu]==="R"){
        alert("Alas");
        return 0;
    }
    else if(user==="P" && def_value[cpu]==="R"){
        alert("Bravo");
        return score++;
    }
    else if(user==="P" && def_value[cpu]==="S"){
        alert("Alas");
        return 0;
    }
}
let i=0,user;
do{
    user=prompt("Enter R for Rock , P for Paper ,S for Scissor ");
    user=user.toUpperCase(user);
    logic(user,def_value,cpu);
    i++;
    var recursion=confirm("Wanna try again");

}while (recursion);
alert("Your score is "+ score);
