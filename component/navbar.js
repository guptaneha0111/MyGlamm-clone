function navbar(){
    return `
        <!-- Navbar -->
        <div id="top_nav">
            <div id="pick_porduct">
                <span>Pick any product at Rs 199</span>
                <span>Shop Now</span>
            </div>
            <div id="myGlamm_store">MyGlamm Store</div>
        </div>
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
            <ul>
                <li><a href="#" >HOME</a></li>
                <li id="makeup"> <a href="#">MAKEUP
                    <div id="nav_makeup_div">
                        <h1>abhay</h1>
                    </div>
                </li>
                <li><a href="#" id="skin_care">SKIN CARE</a></li>
                <li><a href="#" id="sanitizing">SANITIZING</a></li>
                <li><a href="#" id="collection">COLLECTION</a></li>
                <li><a href="#" id="reward">REWARD</a></li>
                <li><a href="#" id="myglamm">MYGLAMM STUDIO</a></li>
                <li> <a href="#" id="offers">OFFERS</a></li>
            </ul>
            
        </div>
        
    `
}

export {navbar}



// <a href="#">HOME</a>
//             <a href="#" id="makeup">MAKEUP
               
//             </a>
//             <a href="#" id="hair_care">HAIR CARE</a>
//             <a href="#" id="skin_care">SKIN CARE</a>
//             <a href="#" id="sanitizing">SANITIZING</a>
//             <a href="#" id="collection">COLLECTION</a>
//             <a href="#" id="reward">REWARD</a>
//             <a href="#" id="myglamm">MYGLAMM STUDIO</a>
//             <a href="#" id="offers">OFFERS</a>