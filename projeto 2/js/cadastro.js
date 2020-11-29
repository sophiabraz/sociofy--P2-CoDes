document.addEventListener('DOMContentLoaded', function() {
    nome = document.getElementById("Nome");
  
    nascimento = document.getElementById("Data de Nascimento");
  
    profisao = document.getElementById("Profissão");
  
    email = document.getElementById("email");
  
    senha = document.getElementById("Senha");
  
    descricao_pessoa = document.getElementById("Sobre você");
  
    cadastrar_empresa = document.getElementsByName('resposta');
  
    nome_empresa = document.getElementById("Nome da empresa");
  
    descricao_empresa = document.getElementById("Descrição da empresa");

    submit = document.querySelector('input[type="submit"]');
  
    //cadastrar = document.querySelector('input[type="submit"]')
  
    cadastro = [nome,nascimento,profisao,email,senha,descricao_pessoa,cadastrar_empresa,nome_empresa,descricao_empresa]
    index = ['nome','nascimento','profisao','email','senha','descricao_pessoa','cadastrar_empresa','nome_empresa','descricao_empresa',]
  
    submit.addEventListener('click', function(event) {
        i = 0
        while (i <9) {
            if (index[i]=='cadastrar_empresa'){
                x = index[i]
                for ( var j = 0 , lenghth = cadastrar_empresa.length; j< lenghth ; j++) {
                    if(cadastrar_empresa[j].checked) {
                        y = cadastrar_empresa[j].value
                    }
                }              
            }
            else{
                x = index[i]
                y = cadastro[i].value 
            }
            localStorage.setItem(x,y)
            i += 1
        }
    })

})