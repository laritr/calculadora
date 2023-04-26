
function validaEntrada(args) {
  for (let i = 0; i < arguments.length; i++) {
    if (!!arguments[i] == false || arguments[i] < 0) {
      return false;
    }
  }
  return true;
}

function calcularIMC(kilos, altura) {
  altura = altura / 100;
  return kilos / (altura * altura);
}

const formCalcularIMC = document.getElementById('form');

formCalcularIMC.addEventListener('submit', function (event) {
  event.preventDefault();

  const kilos = parseFloat(document.getElementById('kilos').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (validaEntrada(kilos, altura)) {
    const imc = calcularIMC(kilos, altura);
    document.getElementById('imc').value = parseFloat(imc).toFixed(2);
    verificarIMC(imc);
  } else {
    document.getElementById('imc').value = '## ERRO ##';
  }
});

function verificarIMC(imc) {

  const idade = document.getElementById( 'idade' ).value;

  if (idade >= 18 && idade <= 59) {
    if (imc < 17) {
      createMessage('Você está muito abaixo do peso', 'alert');
    } else if (imc > 17 && imc <= 18.49) {
      createMessage('Você está abaixo do peso', 'warning');
    } else if (imc >= 18.5 && imc <= 24.99) {
      createMessage('Você está com peso normal', 'sucess');
    } else if (imc >= 25 && imc <= 29.99) {
      createMessage('Você está acima do peso', 'warning');
    } else if (imc >= 30 && imc <= 34.99) {
      createMessage('Você está com obesidade I', 'alert');
    } else {
      createMessage('Você está com obesidade II', 'danger');
    }
  }

  if (idade >= 60) {
    if (imc < 22) {
      createMessage('Abaixo do peso.', 'warning');
    }else if (imc > 22 && imc <= 27) {
      createMessage('Adequado ou Eurotrófico', 'sucess');
    }else {
      createMessage('Sobrepeso', 'alert');
    }
  }
}

function createMessage(msg, type) {
  document
    .querySelector('body')
    .insertAdjacentHTML(
      'beforebegin',
      `<div class='message ${type}'>${msg}</div>`
    );

  setTimeout(function () {
    deleteMessage();
  }, 3000);
}

function deleteMessage() {
  const list = document.querySelectorAll('.message');
  for (const item of list) {
    item.remove();
  }
}