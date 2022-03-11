import {navbar,userExists} from "../Navbar/Navbar.js";
let Navbar=document.getElementById("header");

Navbar.innerHTML=navbar();
userExists();


const container=document.getElementById("container");

fetch("https://fakestoreapi.com/products")
.then(res=>
    res.json()
).then(data=>
    showData(data)
).catch((err)=>
    console.log(err)
)


function showData(data) {

    data.forEach(e=>{
        let div=document.createElement("div");
        let image=document.createElement("img");
        let title=document.createElement("p");

        image.src = e.image;
        title.innerHTML=e.title;
        div.append(image,title);

        container.append(div);

    })

}