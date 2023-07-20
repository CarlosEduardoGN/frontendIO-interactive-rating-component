let botao = '';

function botao1(){
    removeSelecao();
    botao = document.getElementById('b1').getAttribute("data-value");
    document.getElementById('b1').classList.add("selecionado");
    localStorage.setItem('botao', '1');
}

function botao2(){
    removeSelecao();
    botao = document.getElementById('b2').getAttribute("data-value");
    document.getElementById('b2').classList.add("selecionado");
    localStorage.setItem('botao', '2');
}

function botao3(){
    removeSelecao();
    botao = document.getElementById('b3').getAttribute("data-value");
    document.getElementById('b3').classList.add("selecionado");
    localStorage.setItem('botao', '3');
}

function botao4(){
    removeSelecao();
    botao = document.getElementById('b4').getAttribute("data-value");
    document.getElementById('b4').classList.add("selecionado");
    localStorage.setItem('botao', '4');
}

function botao5(){
    removeSelecao();
    botao = document.getElementById('b5').getAttribute("data-value");
    document.getElementById('b5').classList.add("selecionado");
    localStorage.setItem('botao', '5');
}



function removeSelecao(){
    document.getElementById('b1').classList.remove("selecionado");
    document.getElementById('b2').classList.remove("selecionado");
    document.getElementById('b3').classList.remove("selecionado");
    document.getElementById('b4').classList.remove("selecionado");
    document.getElementById('b5').classList.remove("selecionado");
}

function submit(){
    document.getElementById('submit').classList.add("submit");
}

function escreve(){
    botao = localStorage.getItem('botao');
    document.getElementById('rating').innerHTML = "You selected " + botao + " out of 5";
}


if (window.location.pathname === '/fim.html') {
    window.onload = escreve();
  }

