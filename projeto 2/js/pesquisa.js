function aplicaFiltros(){
    var i,opcao;
    i=1
    placeholder = ''
    while(i<8){
        id = 'opcao'+i;
        if(id in localStorage){
            opcao = localStorage.getItem(id)
            placeholder += 'Pesquisa em : '+opcao+' '
            document.getElementsByTagName('input[type="text"]').setAttribute("placeholder", placeholder);
        }
    }
}

function guardaPesquisa(){
    pergunta = document.querySelector('input[type="text"]');
    localStorage.setItem('pergunta',pergunta);
}