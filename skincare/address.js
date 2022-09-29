$(document).ready(function(){
    $('.search_select select').selectpicker();
})



backbutton=document.getElementById("back_add").addEventListener("click", funback)
function funback(){
window.location.href="shopping.html";
}

function shipaddress(){
    window.location.href="payment.html"
}
