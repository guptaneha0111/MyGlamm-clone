let card=document.getElementById("card");
let month=document.getElementById("month");
let cvc1=document.getElementById("cvc1");
let name1=document.getElementById("name");

function order(){
    if(card.value=="" || month.value=="" || cvc1.value=="" || name1.value=="")
    {
alert("Please Fill All The Details");
    }
    else{
        alert("Payment Successful");
        
        setTimeout(redirect,1000)
    }
    
}

function redirect(){
    location.href="shopping.html";
}