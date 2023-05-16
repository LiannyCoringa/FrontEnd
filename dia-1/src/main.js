import validator from 'validator';
import './style.css';

const input = document.querySelector('#value');
const button = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoSaida = document.querySelector('#answer');
const uuid_version = 4;

button.addEventListener('click', (event) => {
  event.preventDefault();
  const campos = {
    cpf: validator.isTaxID(input.ariaValueMax, 'pt-BR'),
    hexColor: validator.isHexColor(input.value),
    email: validator.isEmail(input.value),
    uuid: validator.isUUID(input.value, uuid_version),
    url: validator.isURL(input.value),
  };
  textoSaida.innerHTML = `A validacao retornou ${campos[seletor.value]}`;
});
