const titulo = document.getElementById("titulo")
const botao = document.getElementById("btn")

function trocaCor(){
    titulo.style.color = 'red'
}

function mensagem(){
    alert("Olá pessoal!")
}

let textoOriginal = true

function trocaMensagem(){
    if(textoOriginal){
    titulo.textContent = "Texto Trocado!"
}else{
     titulo.textContent = "TITULO"   
    }
    
    textoOriginal = !textoOriginal
}

botao.addEventListener('click', trocaMensagem)