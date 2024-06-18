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

   tecla.onkeydown = function(evento){
    console.log (evento.code == 'Space')
    if(evento.code === 'Space'){
      tecla.classList.add('activa');  
    }
   }

   tecla.onkeyup = function(){
    tecla.classList.remove('activa');
   }
}

while (contador < 9) {
    
   contador = contador + 1;
}