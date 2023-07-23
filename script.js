sum=0;
String="";
function Add(){
    a=parseInt(document.getElementById("data1").value);
    sum+=a;
    if(String.length==0){
        String+=sum;
    }
    else{
        String+=" + "+a;
    }
    document.getElementById("result").innerHTML = String;   
    document.getElementById("data1").value = "";  
 
}
function sub(){
    a=parseInt(document.getElementById("data1").value);
    sum-=a;
    if(String.length==0){
        String+=sum;
    }
    else{
        String+=" - "+a;
    }
    document.getElementById("result").innerHTML = String;  
    document.getElementById("data1").value = "";  
  
}
function mul(){
    a=parseInt(document.getElementById("data1").value);
    sum*=a;
    if(String.length==0){
        String+=sum;
    }
    else{
        String+=" * "+a;
    }
    document.getElementById("result").innerHTML = String;   
    document.getElementById("data1").value = "";  
 
}
function div(){
    a=parseInt(document.getElementById("data1").value);
    sum/=a;
    if(String.length==0){
        String+=sum;
    }
    else{
        String+=" / "+a;
    }
    document.getElementById("result").innerHTML = String;   
    document.getElementById("data1").value = "";  
 
}
function equal(){
    document.getElementById("result").innerHTML =String+" = "+ sum;
    document.getElementById("data1").value = "";  

}
