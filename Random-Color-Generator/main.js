const container = document.querySelector(".container");
const refresh = document.querySelector(".refresh");


refresh.addEventListener("click", colorGenerator);

colorGenerator();



function colorGenerator(){

    container.innerHTML = "";
    for (let index = 0; index < 30; index++) {
        const colorContainer = document.createElement("div");
        colorContainer.classList.add("color-container");
        let colorCode = randomColor();
        colorContainer.style.backgroundColor = colorCode;
        colorContainer.innerHTML = colorCode;

        colorContainer.addEventListener("click", (e)=>{
            console.log(e.target.innerHTML);
            

            navigator.clipboard.writeText(e.target.innerHTML).then(() => {
                alert("Copied to clipboard: " + e.target.innerHTML);
            }).catch(err => {
                console.error("Failed to copy text: ", err);
            });
        });

        container.appendChild(colorContainer);
        
    }
}

function randomColor(){
    const chars = "0123456789abcdef";
    const code = 6;
    let color = "#";
    for (let i = 0; i < code; i++) {
        color += chars[Math.floor(Math.random() * chars.length)];
        
    }
    return color;
}