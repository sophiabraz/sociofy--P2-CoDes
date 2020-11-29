document.addEventListener('DOMContentLoaded', function() {

  function openPage(pageName, elmnt, color) {
      // Hide all elements with class="tabcontent" by default */
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
    
      // Remove the background color of all tablinks/buttons
      tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
      }
    
      // Show the specific tab content
      document.getElementById(pageName).style.display = "block";
    
      // Add the specific color to the button used to open the tab content
      elmnt.style.backgroundColor = color;
    }

    

  main = document.querySelector('main')

  text = document.querySelector('input[type="text"]') 

  submit = document.querySelector('input[type="submit"]')

  submit.addEventListener('click', function(event) {
      p = document.createElement('p')
      p.innerHTML = text.value
      p.classList.add("sent")
      main.appendChild(p)
      event.preventDefault()
  })
  nome = document.getElementById("Nome");
  
  nascimento = document.getElementById("Data de Nascimento");

  profisao = document.getElementById("Profissão");

  email = document.getElementById("email");

  senha = document.getElementById("Senha");

  descricao_pessoa = document.getElementById("Sobre você");

  cadastrar_empresa = document.getElementsByName('resposta');

  nome_empresa = document.getElementById("Nome da empresa");

  descricao_empresa = document.getElementById("Descrição da empresa");

  //cadastrar = document.querySelector('input[type="submit"]')

  cadastro = [nome,nascimento,profisao,email,senha,descricao_pessoa,cadastrar_empresa,nome_empresa,descricao_empresa]
  index = ['nome','nascimento','profisao','email','senha','descricao_pessoa','cadastrar_empresa','nome_empresa','descricao_empresa',]

  submit.addEventListener('click', function(event) {
      i = 0
      while (i <9) {
          if (index[i]=='cadastrar_empresa'){
              x = nome.value+'_'+ index[i]
              for ( var j = 0 , lenghth = cadastrar_empresa.length; j< lenghth ; j++) {
                  if(cadastrar_empresa[j].checked) {
                      y = cadastrar_empresa[j].value
                  }
              }              
          }
          else{
              x = nome.value+'_'+ index[i]
              y = cadastro[i].value 
          }
          localStorage.setItem(x,y)
          i += 1
      }
  })

  submit.addEventListener('click', function(event) {
    user = nome.nome +'_nome'
    for(i=0,i<localStorage.length;i++){
      if(user == localStorage[i] && senha.value == localStorage[i+5] ){
        validation = true
      }
    }
    if (validation =! true){
      alert('Nome de usuario ou senha Invalidos ')
      stop()
    }
    
})


  
})
