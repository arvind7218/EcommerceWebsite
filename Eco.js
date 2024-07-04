let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");
let letter = document.querySelector(".letter");
let loginPages = document.querySelector(".loginPages");

function homes() {
    mainPage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "block";
    loginPages.style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "rgb(2, 173, 173)";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("login").style.color = "black";
}

function shops() {
    mainPage.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";
    loginPages.style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "rgb(2, 173, 173)";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("login").style.color = "black";
}

function blogs() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "block";
    about.style.display = "none";
    loginPages.style.display = "none";

    document.getElementById("blog").style.color = "rgb(2, 173, 173)";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("login").style.color = "black";
}

function abouts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";
    letter.style.display = "none";
    loginPages.style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "rgb(2, 173, 173)";
    document.getElementById("login").style.color = "black";
}

function contacts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";
    loginPages.style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "rgb(2, 173, 173)";
    document.getElementById("about").style.color = "black";
    document.getElementById("login").style.color = "black";
}

// Cart functionality
function show(img) {
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src = img.src;

    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    document.querySelector(".cart").style.display = "flex";
    loginPages.style.display = "none";
}
function loginPage() {
    loginPages.style.display = "block";
    mainPage.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    contact.style.display = "none";
    letter.style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("login").style.color = "rgb(2, 173, 173)";
}


function addCart() {
    alert("Added To Cart");
    location.reload();
}


// Mouse movement event
const box = document.getElementById("box");
const container = document.getElementById("container");
const ahower = (event) => {
    box.style.left = `${event.clientX}px`;
    box.style.top = `${event.clientY}px`;
}
container.addEventListener('mousemove', ahower);
