function aplicaFiltros() {
    var i=1;
    placeholder = 'Pesquise em: '
    lupa = document.querySelector("a[class='lupa']")

    while (i<13) {
        id = 'opcao' + i;
        if (id in localStorage) {
            opcao = localStorage.getItem(id)
            placeholder += opcao + ' '
        }
        i++
    }

    p = document.createElement('p')
    lupa.before(p);
    p.innerHTML = placeholder
    p.classList.add('filtros')
}
