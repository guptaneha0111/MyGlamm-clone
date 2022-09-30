//haircare
urll="https://js211nehagupta.herokuapp.com/api/haircare";
let getdata1= async () =>{
    let ress= await fetch(urll);
    ress= await ress.json();
    appenddata1(ress)
    console.log("ress:",ress);
}
getdata1();

//shampoo
urll1="https://js211nehagupta.herokuapp.com/api/shampoo"
let shampoo= async () =>{
    let ress1= await fetch(urll1);
    ress1= await ress1.json();
    appenddata1(ress1)
    console.log("ress1:",ress1);
}

//conditioner
urll2="https://js211nehagupta.herokuapp.com/api/conditioner"
let conditioner= async () =>{
    let ress2= await fetch(urll2);
    ress2= await ress2.json();
    appenddata1(ress2)
    console.log("ress2:",ress2);
}

urll3="https://js211nehagupta.herokuapp.com/api/hairoil"
let hairoil= async () =>{
    let ress3= await fetch(urll3);
    ress3= await ress3.json();
    appenddata1(ress3)
    console.log("ress3:",ress3);
}


let hairproduct=document.getElementById("hair_product");

function appenddata1(data)
{
hairproduct.innerHTML="";
data.forEach(function (el)
{
    let imgdiv=document.createElement("div");
    imgdiv.setAttribute("id", "imagdiv")

    let txtdiv=document.createElement("div");
    
     txtdiv.setAttribute("id", "txtdiv");
    txtdiv.addEventListener("click",function ()
    {
        showdata(el);
    })

    let cdiv=document.createElement("div");
    cdiv.setAttribute("id", "cdiv");

    let image=document.createElement("img");
    image.src=el.image;
    
   let name=document.createElement("h3");
   name.innerText=el.title;

   let desc=document.createElement("h3");
   desc.innerText=el.description;

   let price=document.createElement("p");
   price.innerText=`$ ${el.price}`;

   let star=document.createElement("p");
   star.innerText=`${el.star} ⭐`;

   rating=document.createElement("p");
   rating.innerText=`${el.rating} Ratings `
 
 
   imgdiv.append(image)
  txtdiv.append(name,desc,price,star,rating);
  cdiv.append(imgdiv,txtdiv)
  hairproduct.append(cdiv);

})
}

function showdata(cdiv){
console.log(cdiv);
localStorage.setItem("addproduct",JSON.stringify(cdiv));
location.href="shopping.html";
}

