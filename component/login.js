function login(){
    return `
        <h4 style="margin-top:30px;margin-bottom:15px">Get 15% Good Points back on every order</h4>
        <img src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg"/>
        <input type="text"  id="login_name" placeholder=" Username"><br>
        <input type="password" name="" id="login_password" placeholder="Password"><br>
        <button id="login_submit" class="submit_btn">Submit</button>
        <div>
            <p id="signup_link_in_login">Not a member ?<span>Singn up</span></p>
        </div>
    `
}
export {login}