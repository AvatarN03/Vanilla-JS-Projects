

const Btn = document.getElementById('click');
const emojiName = document.getElementById('emoji-name');



const emoji = [];

async function emojiFetch(){
    let response = await fetch(`${window.env.API_BASE_URL}${window.env.API_KEY}`);
    let data = await response.json();

    for(let i =0; i < 1500; i++)
    {
        emoji.push({
            name: data[i].character,
            code: data[i].unicodeName
        });
    }


}

emojiFetch();


Btn.addEventListener('click', () => {
    const randomN = Math.floor(Math.random() * emoji.length);
    
    Btn.innerHTML = emoji[randomN].name
    emojiName.innerHTML = emoji[randomN].code;
    

});