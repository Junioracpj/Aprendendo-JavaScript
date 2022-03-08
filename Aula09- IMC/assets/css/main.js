const form = document.querySelector('#formulario');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    /*essa parte serve para bloquear o efeito de envio do formulario e travar a pagina,
    afim de capiturar as informações do formulario
    */
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    //essa parte serve para capturar os dados obtidos do formulario
    if (!peso) {
        setResultado('peso invalido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura invalida', false);
        return;
    }
    //essa parte serve para verificar se os dados obtidos são validos

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg,true);
    // vai exibir a mensagem na tela informando o IMC e seu texto
});

function getNivelImc(imc) {
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso',
        'obesidade grau 1', 'obesidade grau 2','obesidade grau 3'];
        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
        // vai fazer a condição if declarando o nivel IMC
    }

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
    // função que vai calcular o IMC
}

function criaP() {
    const p = document.createElement('p');
    return p;
    // Vai criar o paragrafo que ira mostrar o resultado
}
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
    // vai caracterizar o paragrafo, 
    //inclsuive criando classes para formatação do CSS
}

