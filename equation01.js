function equation(value){
 let total = 0;
 for(var  i = 0 ;  i < value.length; i++) {
    let num = value.split('')
    if(parseInt(value.slice(i)) !== 0 ){
       total += parseInt(value.slice(i))
    }
    else if(value.slice(i) == "+" ){
        total = total + parseInt(value.slice(i+1));
    }
    else if(value.slice(i) == "-"){
        total = total - parseInt(value.slice(i+1));
    }
    else if(value.slice(i) == "*"){
        total = total * parseInt(value.slice(i+1));
    }
    else if(value.slice(i) == "/"){
        total = total / parseInt(value.slice(i+1));
    }
 }
 return total;
}
console.log(equation("1+1"));
console.log(equation("7*4"));