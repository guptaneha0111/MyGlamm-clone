import {navbar} from './component/navbar.js';
import {signup} from './component/signup.js';
import {login} from './component/login.js';




let login_signup_box=document.getElementById("login_signup_box")
let login_box=document.getElementById("login_box")


// navbar
let nav_box=document.getElementById("nav_box");
nav_box.innerHTML= navbar();
let search_input=document.getElementById("search_bar_input")
search_input.click=()=>{
    search_input.style.border="none"
}



//Signup function
let signup_box=document.getElementById("signup_box")
signup_box.innerHTML=signup();


let login_signup_img=document.getElementById("login_signup_img")
login_signup_img.onclick=()=>{
    login_signup_box.style.display="block"
}

document.querySelector("#submit").addEventListener("click",fun);
function fun(){
    let users=JSON.parse(localStorage.getItem("user_key")) || []
    let name1=document.getElementById("signup_name").value;
    let email1=document.getElementById("signup_email").value;
    let password1=document.getElementById("signup_password").value;
    console.log(name1,email1,password1)
    let user={
        name1,
        email1,
        password1
    }
    for(let i=0;i<users.length;i++){
        if(users[i].email1===user.email1){
            alert("Email is already used")
            return;
        }
    }
    console.log(name1,email1,password1)
    users.push(user)
    login_signup_box.display="none"
    // login username show on navbar
    window.location.href="./index.html"
    localStorage.setItem("user_key",JSON.stringify(users))
    
    let login=document.querySelector("#login_signup_box")
    login.style.color="red"
    alert("Sing up sucessfully");
}


signup_box=document.getElementById("signup_box");
signup_box.onclick=()=>{
    // console.log("work")
    login_signup_box.style.display="block"
};
let cross_symbole=document.getElementById("cross_symbole")
cross_symbole.onclick=()=>{ 
    login_signup_box.style.display="none"
}
let already_login=document.getElementById("already_account");
already_login.style.cursor="pointer"
already_login.onclick=()=>{
    signup_box.style.display="none"
    login_box.style.display="block"
}

// login

login_box.innerHTML=login();
// let login_btn=document.getElementById("login_btn")
// login_btn.onclick=()=>{
//     signup_box.style.display="none"
//     login_box.style.display="block"
// }
// let singup_btn=document.getElementById("signup_btn")
// singup_btn.onclick=()=>{
//     login_box.style.display="none"
//     signup_box.style.display="block"
// }
let signup_link_in_login=document.getElementById("signup_link_in_login");
signup_link_in_login.style.cursor="pointer"
signup_link_in_login.onclick=()=>{
    signup_box.style.display="block"
    login_box.style.display="none"
}
let login_fun=(event)=>{
    event.preventDefault()
    let get_user_data=JSON.parse(localStorage.getItem("user_key"))
    let name=document.getElementById("login_name").value;
    let password=document.getElementById("login_password").value;

    console.log(name,password)
    let login_data={
        name,
        password
    }
    // console.log(login_data)
    for(let i=0;i<get_user_data.length;i++){
        if(get_user_data[i].name1===login_data.name && get_user_data[i].password1===login_data.password){
            alert("Login Sucessfully")
            window.location.href="./index.html"
            return
        }
    }
    alert('Invalid username or password');
    document.getElementById("login_name").value="";
    document.getElementById("login_password").value="";
}

document.querySelector("#login_submit").addEventListener("click",login_fun)





// document.getElementById("makeup").addEventListener("mouseover",display_block)
// function display_block(){
//     document.getElementById("nav_makeup_div").style.display="block"
// }

// document.getElementById("makeup").addEventListener("mouseout",display_none)
// function display_none(){
//     document.getElementById("nav_makeup_div").style.display="none"
// }




// let signupUser=JSON.parse(localStorage.getItem("current_signup"))
// console.log(signupUser)
// let signup_user_name=document.getElementById("signup_user_name")
// signup_user_name.innerText=signupUser
// localStorage.setItem("current_signup",JSON.stringify(user.name1))