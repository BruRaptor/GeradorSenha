let sliderElement = document.querySelector('#slider');

let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');

let password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');

let charset = "abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!#$%&*+-";
let novaSenha = "";

//TAMANHO DA MINHA SENHA
sizePassword.innerHTML = sliderElement.value;
slider.oninput = function(){
  sizePassword.innerHTML = this.value
}

//FUNCTION GERA SENHA

function generatePassword(){
  
  let pass = "";
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

//FUNCTION COPIAR SENHA
function copyPassword(){
  navigator.clipboard.writeText(novaSenha)
  alert('Senha copiada!!');
}