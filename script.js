var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var geracirculo = 1250

var nivel = window.location.search
nivel = nivel.replace('?','')
//vai tirar o ? para valor nulo
//window.location.search é basicamente um window.location.href porem recuperando apenas o que vem pos ?
// incluindo o ?

if(nivel==='normal'){
    //1250
    geracirculo = 1250

}else if(nivel==='dificil'){
    //750
    geracirculo = 1000

}else if(nivel==='impossivel'){
    geracirculo = 750
}else if(nivel==='infinito'){
    geracirculo = 1000
    vidas = -99999
    tempo = Infinity

    var voltar = document.createElement('BUTTON');
    voltar.innerHTML = 'Voltar'
    voltar.className = 'btn btn-outline-danger m-3 botao'
    voltar.addEventListener('click',function(){
        window.location.href = 'index.html'
    })
    document.body.appendChild(voltar);
}

function arrumarTamanho() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura + ' ' + altura)
}
arrumarTamanho()


var cronometro = setInterval(function () {
    tempo -= 1
    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criacirculo)
        window.location.href = 'vitoria_do_jogo.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }   
},1000)


function posicaorandom() {
    if (document.getElementById('circulo')) {
        document.getElementById('circulo').remove()

        if (vidas > 5) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'img/coracao-vazio.png'
            vidas++
        }

    }


    var posicaox = Math.round(Math.random() * largura) - 90
    var posicaoy = Math.round(Math.random() * altura) - 90
    // posicaox = posicaox < 0 ? 0 : posicaox
    // posicaoy = posicaoy < 0 ? 0 : posicaoy
    if (posicaox < 0) {
        posicaox = 0
    } else {
        posicaox = posicaox
    }

    if (posicaoy < 0) {
        posicaoy = 0
    } else {
        posicaoy = posicaoy
    }

    console.log(posicaox + ' ' + posicaoy)
    var circulo = document.createElement('img')
    circulo.src = 'img/circle-red.png'
    circulo.className = tamanhoRandom()
    circulo.style.left = posicaox + 'px'
    circulo.style.top = posicaoy + 'px'
    circulo.style.position = 'absolute'
    circulo.id = 'circulo'
    document.body.appendChild(circulo)

    circulo.onclick = function () {
        this.remove()
        //this faz referencia ao propio elemento html que executa a função
    }
}


function tamanhoRandom() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'circulo1'
        case 1:
            return 'circulo2'
        case 2:
            return 'circulo3'
    }
}
