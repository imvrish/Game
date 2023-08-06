document.getElementById('mybtn').onclick =function(){
    var A=Box1();
    var B=Box2();
    var C=Box3();
    var D=Box4();
    var E=Box5();
    var result=Number(A)+Number(B)+Number(C)+Number(D)+Number(E); 
    if(result>0){
        sessionStorage.setItem("Result",result);
        location.replace('result.html');
        // alert(`Your number is ${result}`);
    }else{
        alert("You Missed Box");
    }
}
function Box1(){
    var b=document.getElementsByName("one");
    for(var i=0;i<b.length;i++){
    if(b[i].checked){
        return(b[i].value);
    }
}
}

function Box2(){
    var b=document.getElementsByName("two");
    for(var i=0;i<b.length;i++){
    if(b[i].checked){
        return(b[i].value);
    }
}
}
function Box3(){
    var b=document.getElementsByName("three");
    for(var i=0;i<b.length;i++){
    if(b[i].checked){
        return(b[i].value);
    }
}
}
function Box4(){
    var b=document.getElementsByName("four");
    for(var i=0;i<b.length;i++){
    if(b[i].checked){
        return(b[i].value);
    }
}
}
function Box5(){
    var b=document.getElementsByName("five");
    for(var i=0;i<b.length;i++){
    if(b[i].checked){
        return(b[i].value);
    }
}
}