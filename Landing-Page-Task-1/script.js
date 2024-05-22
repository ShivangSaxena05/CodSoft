document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".out").style.right="0"
    document.querySelector(".out").style.display="unset"
})
document.querySelector(".cross").addEventListener("click",()=>{
    document.querySelector(".out").style.right="-600px"
    document.querySelector(".out").style.display="none"
})