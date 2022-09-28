import {navbar} from './component/navbar.js';
import {signup} from './component/signup.js';
import {login} from './component/login.js';

let login_signup_box=document.getElementById("login_signup_box")
let login_box=document.getElementById("login_box")



let nav_box=document.getElementById("nav_box");
nav_box.innerHTML= navbar();



//Signup function
let signup_box=document.getElementById("signup_box")
signup_box.innerHTML=signup();
console.log(signup())

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
    localStorage.setItem("user_key",JSON.stringify(users))
    alert("Sing up sucessfully")
}


signup_box=document.getElementById("signup_box");
signup_box.onclick=()=>{
    console.log("work")
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
let login_btn=document.getElementById("login_btn")
login_btn.onclick=()=>{
    signup_box.style.display="none"
    login_box.style.display="block"
}
let singup_btn=document.getElementById("signup_btn")
singup_btn.onclick=()=>{
    login_box.style.display="none"
    signup_box.style.display="block"
}
let signup_link_in_login=document.getElementById("signup_link_in_login");
signup_link_in_login.style.cursor="pointer"
signup_link_in_login.onclick=()=>{
    signup_box.style.display="block"
    login_box.style.display="none"
}


let get_user_data=JSON.parse(localStorage.getItem("user_key"))
// console.log(get_user_data)

let login_fun=(event)=>{
    event.preventDefault()
    let name=document.getElementById("name").value;
    let password=document.getElementById("password").value;

    let login_data={
        name,
        password
    }
    console.log(login_data.name)
    for(let i=0;i<get_user_data.length;i++){
        if(get_user_data[i].name1===login_data.name && get_user_data[i].password1===login_data.password){
            alert("Login Sucessfully")
            return
        }
    }
    alert('Invalid username or password');
}

document.querySelector("#login_submit").addEventListener("click",login_fun)