const apiKey ='6d014d5a335e5901f3dc0e2f09b9a7b5f0cd6290';

const Btn = document.getElementById('click');
const emojiName = document.getElementById('emoji-name');



const emoji = [];

async function emojiFetch(){
    let response = await fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`);
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

console.log(emoji);


Btn.addEventListener('click', () => {
    const randomN = Math.floor(Math.random() * emoji.length);
    console.log(randomN);
    Btn.innerHTML = emoji[randomN].name
    emojiName.innerHTML = emoji[randomN].code;
    

});