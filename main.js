function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla =listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`
    console.log(idAudio)

   tecla.onclick = function (){
    playSonido(idAudio);
   };
}

while (contador < 9) {
    
   contador = contador + 1;
}