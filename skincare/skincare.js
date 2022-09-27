

 url="https://js211nehagupta.herokuapp.com/api/skincare";
let getdata= async () =>{
    let res= await fetch(url);
    res= await res.json();
    appenddata(res)
    console.log("res:",res);
}
getdata();


url1="https://js211nehagupta.herokuapp.com/api/moisture"
let moisture= async () =>{
    let res= await fetch(url1);
    res= await res.json();
    appenddata(res)
    console.log("res:",res);
}
moisture();



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
    // div.addEventListener("click",function ()
    // {
    //     showdata(el);
    // })

    let cdiv=document.createElement("div");
    cdiv.setAttribute("id", "cdiv");

    let image=document.createElement("img");
    image.src=el.image;
    
   let name=document.createElement("h3");
   name.innerText=el.title;

   let desc=document.createElement("h3");
   desc.innerText=el.description;

   let price=document.createElement("p");
   price.innerText=el.price;
 
   imgdiv.append(image)
  txtdiv.append(name,desc,price);
  cdiv.append(imgdiv,txtdiv)
  skinproduct.append(cdiv);

})
}



