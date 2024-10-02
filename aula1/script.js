
$(document).ready(function(){

    $("input[name=cep]").mask("00000-000");
    $("form").on("submit", function(event) {
        //interrompe o evento.
        event.stopPropagation();
        // previne (impede) o comportamento padrao
        // do navegador ao enviar o formulario, neste
        // caso, impede o envio do formulário.
        event.preventDefault();
    });

    $("input[name=cep]").on("keyup", function(event){
        let cep = $("input[name=cep]").val();
        cep = cep.replace("-","");
        alert(cep);
    });
});
