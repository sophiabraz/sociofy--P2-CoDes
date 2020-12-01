document.addEventListener('DOMContentLoaded', function() {

    submit = document.getElementsByClassName("botao_entrar");

    nome = document.getElementById("Nome");

    senha = document.getElementById("Senha");


    submit.addEventListener('click', function(event) {
        usuario = localStorage.getItem('nome')
        palavra_passe = localStorage.getItem('senha')
    
        if(nome != usuario && senha != palavra_passe ) {
          alert('Usuario ou senha incorreto')
          window.stop()
        }
    })


  
})