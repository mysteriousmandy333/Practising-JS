const space=(a)=>{
    if (a==5){
        sp=" "
    }
    else if (a==3){
        sp="  "
    }
    else if (a==1){
        sp="   "
    }
    else{
        sp="";
    }
    return sp;
}
    let design="";
    let len;
    for(let j=0;j<4;j++){
        for(let i=7;i>=1;i--){
            design=design+i;
            
        }
        len = design.length;
        var  n= design.slice(j,len-j);
         var h=space(n.length);
        console.log(h+design.slice(j,len-j));
        design=design.substring(0,"");
        
    }
let a = space(7);
console.log(a);