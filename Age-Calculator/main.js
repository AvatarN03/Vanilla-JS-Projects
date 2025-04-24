const form = document.querySelector('form');
const AgeInput = document.getElementById('birth');
const result = document.getElementById('result');

const currentDate = new Date();
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const birthValue = AgeInput.value;
    const birthDate = new Date(birthValue);
    if (birthDate > currentDate) {
        result.innerHTML = "You are not born yet, bro!";
    } else if (birthValue) {
        const age = getAge(birthValue);
        result.innerHTML = `You're ${age} years old.`;
    } else {
        alert("Please select the Birthdate...");
    }

})

function getAge(birthValue) {
    const birthDate = new Date(birthValue);

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const m = currentDate.getMonth() - birthDate.getMonth();

    if( m < 0 && (m === 0 || (currentDate.getDate() < birthDate.getDate()))){
        age --;
    }
    return age;
}