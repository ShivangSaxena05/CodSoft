let currentnumber=0;
let textbox = document.getElementById("text")
textbox.textContent=0
const numbers = document.querySelectorAll(".number")
const oper = document.querySelectorAll('.oper')
const back = document.querySelector('.bc')
numbers.forEach(number=>{
    number.addEventListener('click',()=>{
        if(currentnumber===0){
            clearing()
        }
        currentnumber+=number.textContent
        textbox.textContent=currentnumber
    })
})
back.addEventListener('click',()=>{
    currentnumber = currentnumber.slice(0,-1)
    textbox.textContent=currentnumber
})
oper.forEach(op=>{
    op.addEventListener('click',()=>{
        prev=currentnumber
        operator=op.textContent
        if(op.textContent==="x"){
            operator="*"
        }
        currentnumber+=operator
        textbox.textContent=currentnumber
    })
})
document.querySelector('.equal').addEventListener('click',()=>{
    result = eval(currentnumber)
    textbox.textContent="="+result
})

function clearing(){
    console.log("click")
    currentnumber=""
    prev=""
    operator=""
    textbox.textContent=0
}
