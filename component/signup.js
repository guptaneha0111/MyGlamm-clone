function signup(){
    return `
       
        <input type="text"  id="signup_name" placeholder="Username"><br>
        <input type="text"  id="signup_email" placeholder="Email"><br>
        <input type="password"  id="signup_password" placeholder="Password"><br>
        <button id="submit" class="submit_btn">Submit</button>
        <div id="already_account">
            <p>Already have a account ?</p>
            <p id="already_login">Log in ></p>
        </div>

    `
}
export {signup}




