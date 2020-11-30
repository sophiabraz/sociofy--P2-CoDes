document.addEventListener('DOMContentLoaded', function() {
    submit = document.querySelector('input[type="submit"]');
    submit.addEventListener('click', function(event) {
        for ( var j = 0 , lenghth = cadastrar_empresa.length; j< lenghth ; j++) {
            if(cadastrar_empresa[j].checked) {
                y = cadastrar_empresa[j].value
            }
        } 
}
})