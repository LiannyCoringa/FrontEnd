import "./style.css";

const img = document.querySelector('#image');
const buttonDog = document.querySelector('#dog');
const buttonCat = document.querySelector('#cat');
const buttonSurprise = document.querySelector('#surprise');

buttonDog.addEventListener('click', (event) => {
    const API_DOG = "https://dog.ceo/api/breeds/image/random";
    fetch(API_DOG)
    .then((response) => response.json())
    .then((data) => {
        img.src = data.message;
    });
})
buttonCat.addEventListener('click', (event) => {
    const API_CAT = "https://aws.random.cat/meow";
    fetch(API_CAT)
    .then((response) => response.json())
    .then((data) => {
        img.src = data.file;
    });
});

buttonSurprise.addEventListener('click', (event) => {
    Promise.any([
        fetch("https://dog.ceo/api/breeds/image/random"),
        fetch("https://aws.random.cat/meow"),
    ])
    .then((response) => response.json())
    .then((data) => {
        const petURL = data.file || data.message;
        img.src = petURL;
    })
})