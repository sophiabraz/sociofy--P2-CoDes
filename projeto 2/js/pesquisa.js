function aplicaFiltros(){
    var i,opcao;
    i=1
    placeholder = ''
    text = document.getElementsByTagName('input[type="text"]')
    while(i<8){
        id = 'opcao'+i;
        if(id in localStorage){
            opcao = localStorage.getItem(id)
            placeholder += 'Pesquisa em : '+opcao+' '
            
        }
    }
    text.setAttribute("placeholder", placeholder);
}

function guardaPesquisa(){
    pergunta = document.querySelector('input[type="text"]');
    localStorage.setItem('pergunta',pergunta);
}