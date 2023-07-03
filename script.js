const container = document.querySelector(".container")
const inputEmail = document.querySelector("#inputEmail");
const subs = document.querySelector('.subs');
const warnError = document.querySelector(".warn");
const successMsg = document.querySelector(".successMsg");
const dismissMsg = document.querySelector(".discard");
let width = window.innerWidth;

inputEmail.addEventListener('change', e=>{
    const defValue = e.target.value;
    if(defValue === e.target.getAttribute("data-value")){
        e.target.style.border = "1px solid var(--grey)";
        e.target.style.color = "black";
        warnError.style.display = "none";
        subs.addEventListener("click",()=>{
            container.classList.add("invisible");
            successMsg.style.visibility = "visible";
        });
        
        dismissMsg.addEventListener("click",()=>{
            container.classList.remove("invisible");
            successMsg.style.visibility = "hidden";
        });
    }else {
        e.target.style.border = "1px solid var(--tomato)";
        e.target.style.color = "var(--tomato)";
        warnError.style.display = "block";
    }
});
