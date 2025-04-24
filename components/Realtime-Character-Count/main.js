const textInput = document.getElementById("text");
const totalChar = document.querySelector(".total-characters")
const remainChar = document.querySelector(".remaining-characters")

textInput.addEventListener("keyup", ()=>{
    
    updateCounter();
})
updateCounter();

function updateCounter(){
    const textLength = textInput.value.length;
    totalChar.innerText = textLength;

    remainChar.innerHTML = textInput.getAttribute("maxLength") - textInput.value.length;  

}