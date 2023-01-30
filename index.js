const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.querySelector("#password1")
let password2 = document.querySelector("#password2")
let generate = document.getElementById("generate")
let number = document.getElementById("number").value
let lightmode = document.getElementById("lightmode")
let element = document.body
let copy = document.getElementById("copy")



lightmode.addEventListener("click",function(){
    element.classList.toggle("light-mode")
    
    
})

generate.addEventListener("click", function(){
     let number = document.getElementById("number").value
    if (number === ""){
        number = 5
        password1.textContent = ""
        password2.textContent = ""
    for(let i = 0; i<number;i++){
        random1 = Math.floor(Math.random() * characters.length)
        random2 = Math.floor(Math.random() * characters.length)
        password1.textContent += characters[random1]
        password2.textContent += characters[random2]
        
       
    }
        
    }
    else{
        let number = document.getElementById("number").value
        password1.textContent = ""
        password2.textContent = ""
    for(let i = 0; i<number;i++){
        random1 = Math.floor(Math.random() * characters.length)
        random2 = Math.floor(Math.random() * characters.length)
        password1.textContent += characters[random1]
        password2.textContent += characters[random2]
    }
        
    }
    
    
 
    
    
    
    
    
})



