/*
function verde(){
    document.querySelector('#exemplo').classList.remove("vermelho");
    document.querySelector('#exemplo').classList.remove("azul");
    document.querySelector('#exemplo').classList.add("verde")
}

function vermelho(){
    document.querySelector('#exemplo').classList.remove("verde");
    document.querySelector('#exemplo').classList.remove("azul");
    document.querySelector('#exemplo').classList.add("vermelho")
}

function azul(){
    document.querySelector('#exemplo').classList.remove("vermelho");
    document.querySelector('#exemplo').classList.remove("verde");
    document.querySelector('#exemplo').classList.add("azul")
}
*/

function aberto(){
    document.querySelector('.semaforo3').classList.remove('opacity')
    document.querySelector('.semaforo1').classList.add('opacity')
    document.querySelector('.semaforo2').classList.add('opacity')
}


function atencao(){
    document.querySelector('.semaforo2').classList.remove('opacity')
    document.querySelector('.semaforo1').classList.add('opacity')
    document.querySelector('.semaforo3').classList.add('opacity')
}

function fechado(){
    document.querySelector('.semaforo1').classList.remove('opacity')
    document.querySelector('.semaforo3').classList.add('opacity')
    document.querySelector('.semaforo2').classList.add('opacity')
}


function trocar(){
    if(document.querySelectorAll('button')[3].classList.contains('white')){
        document.querySelectorAll('button')[3].classList.add('preto')
        document.querySelectorAll('button')[3].classList.remove('white')
    } else{
        document.querySelectorAll('button')[3].classList.add('white')
        document.querySelectorAll('button')[3].classList.remove('preto')  
    }
    
}
























