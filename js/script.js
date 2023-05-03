const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;

  

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';
        
    if (idade > 60) {
        if (imc <= 18.5) {
            classificacao = "Baixo Peso";
        } else if (valorIMC >= 18.5 && valorIMC < 24.9) {
            classificacao = "Adequado ou eutrófico";
        } else if (valorIMC >= 25 && valorIMC < 29.9) {
            classificacao = "Sobrepeso";
        } else if (valorIMC >= 30) {
            classificacao = "obesidade idosa";
        }
    }
        
    else if (idade >= 18 && idade <= 59) {
        if (valorIMC <= 18.5) {
            classificacao = 'abaixo do peso'
        }
        else if (valorIMC > 18.5 && valorIMC <= 24.9){
            classificacao = 'Peso normal';
        }else if (valorIMC >= 25 && valorIMC <= 29.9) {
            classificacao = 'com peso excessivamente gordo';
        }else if (valorIMC >= 30 && valorIMC <= 34.9){
            classificacao = 'levemente Obeso grau I';
        }else if (valorIMC >= 35 && valorIMC <= 40){
            classificacao = 'com obesidade grau II';
        }else if (valorIMC >= 41){
            classificacao = 'com obesidade grau III';
        }

    }
        
    else {
        if (imc < 18.5) {
            classificacao = "Baixo Peso";
        } else if (valorIMC >= 18.5 && valorIMC < 24.9) {
            classificacao = "Peso Normal";
        } else if (valorIMC >= 25 && valorIMC < 29.9) {
            classificacao = "Excesso de Peso.";
        } else if (valorIMC >= 30 && valorIMC < 34.9) {
            classificacao = "Obesidade Grau I";
        } else if (valorIMC >= 35 && valorIMC < 39.9) {
            classificacao = "Obesidade Grau II";
        } else if (valorIMC >= 40){
            classificacao = "Obesidade Grau III";
        } 
    } if (classificacao) {
        const resultadoDiv = document.getElementById("resultado");

        resultadoDiv.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;      
    }
}

calcular.addEventListener('click', imc);
