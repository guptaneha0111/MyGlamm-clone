// open and close cartdiv

let carticon=document.querySelector("#cart_icon");
let cartdiv=document.querySelector(".cartdiv");
let closecart=document.querySelector("#cart-close");

carticon.addEventListener("click", fun)

function fun(){
    cartdiv.classList.add("active");

}

closecart.addEventListener("click", fun1)

function fun1(){
    cartdiv.classList.remove("active");

}





//single select product append
let data= JSON.parse(localStorage.getItem("addproduct"));
console.log(data);

let shoppingobj= document.getElementById("shopping_obj");
function appenddata1(data)
{
    
    let imgdiv=document.createElement("div");
  

    let txtdiv=document.createElement("div");
    txtdiv.setAttribute("id", "txtdiv1")

    let cdiv=document.createElement("div");
   cdiv.setAttribute("id", "mainshop")

    let image1=document.createElement("img");
    image1.src=data.image;
    
   let name=document.createElement("h3");
   name.innerText=data.title;

   let desc=document.createElement("h3");
   desc.innerText=data.description;

   let price1=document.createElement("p");
   price1.innerText=data.price;

   let cartbtn=document.createElement("button");
   cartbtn.innerText="ADD TO BAG";
   cartbtn.addEventListener("click", function(){
    addtocart(data);
   })

   imgdiv.append(image1);
   txtdiv.append(name,desc,price1,cartbtn)
   cdiv.append(imgdiv,txtdiv);
   shoppingobj.append(cdiv);
 
}
appenddata1(data)

//add to cart
let cart=JSON.parse(localStorage.getItem("cartpage")) || [];
function addtocart(cdiv){
    cart.push(cdiv);
    console.log(cart);
    alert("Product Added Successfully");
localStorage.setItem("cartpage",JSON.stringify(cart));
appenddata2(cart)
}




//append under cart container(add to cart product append)
let containercart=document.querySelector(".cart_content")
let totalprice=document.querySelector(".total_price");

function appenddata2(cartdata)
{
    let total=0;
    containercart.innerHTML="";
cartdata.forEach(function (el,index)
{

    total+=Number(el.price)

    let cdiv1=document.createElement("div");
   cdiv1.setAttribute("class", "cart_box");

   let cdiv2=document.createElement("div");
   cdiv2.setAttribute("class", "detail_box");

    let image=document.createElement("img");
    image.src=el.image;
    
   let name=document.createElement("h3");
   name.innerText=el.title;

   let icon=document.createElement("i")
   icon.setAttribute("class", "bx bxs-trash-alt")
   icon.setAttribute("id", "cart-remove")
   icon.addEventListener("click", function(){
    deletecart(index)
   })

   let price=document.createElement("p");
   price.innerText=el.price;

//    let input1=document.createElement("input");
//    input1.setAttribute("class", "card_quantity")
//    input1.type="number";
//    input1.value="1";
  
    cdiv2.append(name,price)
  cdiv1.append(image,cdiv2,icon)
  
  containercart.append(cdiv1);

 })
totalprice.innerText=total;
}

appenddata2(cart)

function deletecart(index){
    cart.splice(index,1);
    localStorage.setItem("cartpage", JSON.stringify(cart));
     appenddata2(cart)
}

let checkout_address=document.querySelector(".p_checkout").addEventListener("click", funcheckoutto)
function funcheckoutto(){
    window.location.href="address.html"
}

