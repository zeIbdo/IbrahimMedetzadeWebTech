function checkNumber(){
    let x = parseInt(document.getElementById("checkNum").value);
    let result="";
    if(x===0){
        result="It is zero";
    }
    else if(x%2===0 && x>0){
        result="It is even and positive";
    }
    else if(x%2===0 && x<0){
        result="It is even and negative";
    }
    else if(x%2!==0 && x<0){
        result="It is odd and negative";
    }
    else if(x%2!==0 && x>0){
        result="It is odd and positive";
    }

    alert(result);

}