function login(){
    return `
        <input type="text"  id="name" placeholder=" Username"><br>
        <input type="password" name="" id="password" placeholder="Password"><br>
        <button id="login_submit" class="submit_btn">Submit</button>
        <div>
            <p id="signup_link_in_login">Not a member ?<span>Singn up</span></p>
        </div>
    `
}
export {login}