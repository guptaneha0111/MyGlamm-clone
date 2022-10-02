import {navbar} from '../component/navbar.js';
document.getElementById("nav_box").innerHTML=navbar()


//skincare
let url="https://js211nehagupta.herokuapp.com/api/skincare";
let getdata= async () =>{
    let res= await fetch(url);
    res= await res.json();
    appenddata(res)
    console.log("res:",res);
}
getdata();

//moisture
let url1="https://js211nehagupta.herokuapp.com/api/moisture"
let moistr=document.getElementById("mois").addEventListener("click", moisture)
async function moisture(){
    let res1= await fetch(url1);
    res1= await res1.json();
    appenddata(res1)
    console.log("res1:",res1);
}

//nightcream
let url2="https://js211nehagupta.herokuapp.com/api/nightcream"
let nigh=document.getElementById("night").addEventListener("click", nightcream)
async function nightcream(){
    let res2= await fetch(url2);
    res2= await res2.json();
    appenddata(res2)
    console.log("res2:",res2);
}

//eyecream
let url3="https://js211nehagupta.herokuapp.com/api/eyecream"
let eye=document.getElementById("eye").addEventListener("click", eyecream)
async function eyecream(){
    let res3= await fetch(url3);
    res3= await res3.json();
    appenddata(res3)
    console.log("res3:",res3);
}

//bodylotion
let url4="https://js211nehagupta.herokuapp.com/api/bodylotion"
let lotion=document.getElementById("bodylotionh1").addEventListener("click", bodylotion)
async function bodylotion(){
    let res4= await fetch(url4);
    res4= await res4.json();
    appenddata(res4)
    console.log("res4:",res4);
}


let skinproduct=document.getElementById("skin_product");

function appenddata(data)
{
skinproduct.innerHTML="";
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
   desc.setAttribute("id", "descdiv");

   let price=document.createElement("p");
   price.innerText=`$ ${el.price}`;

   let star=document.createElement("p");
   star.innerText=`${el.star} ⭐`;

   let rating=document.createElement("p");
   rating.innerText=`${el.rating} Ratings `
 
   imgdiv.append(image)
  txtdiv.append(name,desc,price,star,rating);
  cdiv.append(imgdiv,txtdiv)
  skinproduct.append(cdiv);

})
}

function showdata(cdiv){
console.log(cdiv);
localStorage.setItem("addproduct",JSON.stringify(cdiv));
location.href="shopping.html";
}

//onclick skin care
document.getElementById('skincarediv1234').addEventListener("click", skincarefun)
function skincarefun(){
window.location.href="skincare.html"
}

