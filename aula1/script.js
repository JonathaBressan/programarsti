
$(document).ready(function(){
    $("form").on("submit", function(event) {
        //interrompe o evento.
        event.stopPropagation();
        // previne (impede) o comportamento padrao
        // do navegador ao enviar o formulario, neste
        // caso, impede o envio do formulário.
        event.preventDefault();
        alert("nao é pra apertar ainda");
        
    });

    $("input[name=cep]").on("change", function(event){
        
    })
});
