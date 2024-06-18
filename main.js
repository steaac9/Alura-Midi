function playSonidoPom (){
    document.querySelector('#sonido_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

while (contador < 9) {
   listaDeTeclas[contador].onclick = playSonidoPom;
   contador = contador + 1
   console.log('Vuelta' + contador)
}