function aplicaResposta(){
    resposta = localStorage.getItem('resposta');
    document.querySelector('input[type="text"]').setAttribute("placeholder", resposta);
}