function navbar(){
    return `
        <!-- Navbar -->
        <div id="navbar">
            <div id="logo_container">
            <a  href="#">
                <img src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" width="140px" height="" alt="" srcset="">
            </a>
            </div>
            <div id="search_bar">
                <form action="">
                    <input type="text" name="" id="">
                </form>
            </div>
            <div id="login_cart">
                <div id="login_signup_img"><img src="./image/icon/user.png" alt=""></div>
                <div id="bag_cart"><img src="./image/icon/shopping-bag.png" alt=""></div>
            </div>
        </div>
        <div id="nav_link">
            <a href="#">HOME</a>
            <a href="#">MAKEUP</a>
            <a href="#">HAIR CARE</a>
            <a href="#">SKIN CARE</a>
            <a href="#">SANITIZING</a>
            <a href="#">COLLECTION</a>
            <a href="#">REWARD</a>
            <a href="#">MYGLAMM STUDIO</a>
            <a href="#">OFFERS</a>
        </div>
    `
}

export {navbar}