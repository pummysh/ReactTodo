function navbar(){
    return `<nav class="navbar">
    <div class="nav-icon">
    <a href="/View/Home/Home.html">Ajio</a>
    </div>
    <div class="nav-right">
        <div class="nav-top">
            <div id="sighIn">
            <a  href="/View/SignIn/signin.html" id="h_sign">Sign In</a>
            </div>
            <div>Costomer Care</div>
            <div>Visit AJIOLUXE</div>
        </div>
        <div class="nav-bot">
            <div>Men</div>
            <div>Women</div>
            <div>Kids</div>
            <div>Indie</div>
            <div>Home & Kitchens</div>
            <div>
                <input type="text">
            </div>
            <div id="sighUp">
            <a id="h_signout" href="/View/SignIn/signUp.html">Sign Up</a>
            </div>
            <div>Cart</div>
        </div>
    </div>
</nav>`
}


function userExists() {

    let name=JSON.parse(localStorage.getItem('user'));
    if(name){
        document.getElementById('sighIn').innerHTML=name;
        let a=document.getElementById('sighUp');
        a.innerHTML="Signout";
        a.addEventListener('click',logout)
    }

}

function logout(){
    localStorage.removeItem('user');
    window.location.href="/View/SignIn/signin.html"
}
export  {navbar , userExists,logout}