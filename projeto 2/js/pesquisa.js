function aplicaFiltros(){​​
    var i,opcao,lupa,p;
    i=1
    placeholder = 'Pesquise em: '
    lupa = document.querySelector("a[class='lupa']");

    while(i<8){​​
        id = 'opcao'+i;
        if(id in localStorage){​​
            opcao = localStorage.getItem(id)
            placeholder += opcao+' '
        }​​
        i++
    }​​

    p = document.createElement('p');
    lupa.before(p);
    p.innerHTML = placeholder
    p.classList.add("filtros")

}​​

function guardaPesquisa(){​​
    pergunta = document.querySelector('input[type="text"]');
    localStorage.setItem('pergunta',pergunta);
}​​