let get_user_data=JSON.parse(localStorage.getItem("user_key"))
console.log(get_user_data)



let login_fun=(event)=>{
    event.preventDefault()
    let name1=document.getElementById("name").value;
    let password1=document.getElementById("password").value;

    let login_data={
        name1,
        password1
    }
    console.log(login_data.name1)
    for(let i=0;i<get_user_data.length;i++){
        // console.log(get_user_data[i].name1===login_data.name1)
        if(get_user_data[i].name1===login_data.name1 && get_user_data[i].password1===login_data.password1){
            alert("Login Sucessfully")
            return;
        }
    }
    alert('Invalid username or password');
}
document.querySelector("form").addEventListener("submit",login_fun);