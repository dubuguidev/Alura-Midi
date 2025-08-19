function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Element not found or invalid selector')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// para
for(let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    // template string abaixo:
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento){

        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
    
    // contador = contador + 1 trocado por contador++
    // console.log(contador);
}

// function entregaPacote(corDoPacote) {
//     if (corDoPacote == 'vermelho') {
//         mandaProCeara();
//     }
//     if (corDoPacote == 'azul'){
//         mandaProRioDeJaneiro();
//     }
// }

