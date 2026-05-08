function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "bittu" && password === "0905"){
        window.location.href = "pages/chapter1.html";
    }
    else{
        alert("Only she can enter ❤️");
    }
}

function nextPage(page){
    window.location.href = page;
}

let countDate = new Date("May 9, 2026 00:00:00").getTime();

let x = setInterval(function(){

let now = new Date().getTime();

let distance = countDate - now;

let days = Math.floor(distance / (1000*60*60*24));

document.getElementById("countdown").innerHTML =
days + " days left ❤️";

},1000);

window.addEventListener("scroll", function(){

    const scrolled = window.pageYOffset;

    document.querySelectorAll(".story-image").forEach((img)=>{

        img.style.transform =
        `translateY(${scrolled * -0.05}px)`;

    });

});