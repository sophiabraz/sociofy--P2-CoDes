function aplicaResposta(){
    resposta = localStorage.getItem('resposta');
    document.getElementsByTagName('input[type="text"]').setAttribute("placeholder", resposta);
}