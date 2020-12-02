function Verifica() {
    nome = document.getElementById("Nome");
    senha = document.getElementById("Senha");
    usuario = localStorage.getItem("nome")
    palavra_passe = localStorage.getItem("senha")

    if (nome.value != usuario && senha.value != palavra_passe) {
        alert('Usuário ou senha incorreto')
        window.stop()
    }
}