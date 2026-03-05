const tabs=document.querySelectorAll(".tab")

document
.querySelectorAll("nav button")
.forEach(btn=>{

btn.onclick=()=>{

tabs.forEach(t=>t.classList.remove("active"))

document
.getElementById(btn.dataset.tab)
.classList.add("active")

}

})

document
.getElementById("chat")
.classList.add("active")

document
.getElementById("chatBtn")
.onclick=()=>{

let q=
document
.getElementById("chatPrompt")
.value

document
.getElementById("chatOutput")
.innerText=
"AI回答: "+q

}
