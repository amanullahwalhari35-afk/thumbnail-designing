let menubtn = document.querySelector(".menu-icon");
let menubar = document.querySelector(".nav-links");

menubtn.addEventListener("click",() => {
    if(menubar.style.display == "none") {
        menubar.style.display = "flex"
    }
    else {
        menubar.style.display = "none"
    }
    
})

let Sendemail = () => {
    window.location.href = "mailto:amanullahwalhari35@gmail.com"
}