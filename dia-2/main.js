import Swal from 'sweetalert2';

const button = document.querySelector('#button');
const img = document.querySelector('#image');
const nome = document.querySelector('#nome');


const heroes = (number) => {
    const APIid = `https://akabab.github.io/superhero-api/api/id/${number}.json`;
    fetch(APIid)
    .then((response) => response.json())
    .then((data) => {
        img.src = data.images.sm;
        nome.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
        icon: 'error',
        title: 'Hero not found',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      }))
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    const numberId = Math.floor(Math.random() * 500 + 1);
    heroes(numberId);
})