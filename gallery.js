let thumbnails = document.querySelectorAll(".thumimg");
let display = document.querySelector(".display");
let back = document.querySelector(".back");
let image = document.querySelector("#main-pic");
let left = document.querySelector(".left")
let right = document.querySelector(".right")

let currentindex = 0;
thumbnails.forEach((thumbnail,index) => {
    thumbnail.addEventListener("click", () => {
        currentindex = index;
        console.log(thumbnail)
        display.style.display = "flex";
       showimg()
        
    })
    
})
let showimg = ()=> {
         image.src = thumbnails[currentindex].src;  
         image.alt = thumbnails[currentindex].alt;
    }
left.addEventListener("click", () => {
    currentindex++;
    if(currentindex >= thumbnails.length) {
        currentindex = 0
    }
    showimg()
})
right.addEventListener("click", () => {
    currentindex--;
    if(currentindex < 0) {
        currentindex = thumbnails.length - 1
        
    }
    showimg()
})
back.addEventListener("click", () => {
    display.style.display = "none"
    
})

