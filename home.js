

let imglink=["https://files.myglamm.com/site-images/original/1920x527sk.jpg","https://files.myglamm.com/site-images/original/TGLF-sept-main-KV-1920x527_2.jpg"]
let imgState=0
let left_btn=document.getElementById("left_btn")
let right_btn=document.getElementById("right_btn")
let slimg=document.getElementById("slimg")

right_btn.addEventListener("click",()=>{
    if( imgState==1){
        return
    }
    
    imgState++
    slimg.src=imglink[imgState]
    console.log(imgState)
})


left_btn.addEventListener("click",()=>{
    if( imgState===0){
        return
        
    }
    
    imgState--
    slimg.src=imglink[imgState]
    console.log(imgState)
})