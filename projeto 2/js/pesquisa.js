function aplicaFiltros(){
    var i,opcao,lupa;
    i=1
    placeholder = ''
    lupa = document.getElementsByClassName("lupa");
    while(i<8){
        id = 'opcao'+i;
        if(id in localStorage){
            opcao = localStorage.getItem(id)
            placeholder += 'Pesquise em: '+opcao+' '
        }
        i++
    }
    p = document.createElement('p')
    p.innerHTML = placeholder
    p.classList.add("filtros")
    lupa.parentNode.insertBefore(p,lupa);

}

function guardaPesquisa(){
    pergunta = document.querySelector('input[type="text"]');
    localStorage.setItem('pergunta',pergunta);
}