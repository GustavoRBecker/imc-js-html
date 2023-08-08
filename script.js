const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const button = document.getElementById('button');
const resultado = document.getElementById('resultado');

const categoriaImc = (imc) => {
    if (imc > 40) return 'Obesidade grau III';
    if (imc > 35) return 'Obesidade grau II';
    if (imc > 30) return 'Obesidade grau I';
    if (imc > 25) return 'Acima do peso';
    if (imc > 18.5) return 'Peso ideal';
    return 'Abaixo do peso'
}

const imcCalc = () => {
    if (!altura.value || !peso.value || !nome.value) return resultado.textContent = 'Digite todos os dados'

    const valorImc = (peso.value / (altura.value * altura.value)).toFixed(1);
    resultado.textContent = `${nome.value} = ${categoriaImc(valorImc)}`
}

button.addEventListener('click', imcCalc);