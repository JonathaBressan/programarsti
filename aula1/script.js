
$(document).ready(function(){
    
    $("input[name=cep]").mask("00000-000");
    $("input[name=numero]").mask("n", {
        translation: {
            'n': {
                pattern: /[0-9]/,
                recursive: true
            }
        }
    });


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
        if(cep.length == 8){
            $("input[name=cep]").removeClass("is-invalid");
            //alert(cep);
            
            $.ajax("https://viacep.com.br/ws/" + cep + "/json")
            .done(function (data){
                let resposta = JSON.parse(data);
                if (!resposta.erro) {
                    $("input[name=rua]").val(resposta.logradouro);
                    $("input[name=complemento]").val(resposta.complemento);
                    $("input[name=bairro]").val(resposta.bairro);
                    $("input[name=estado]").val(resposta.estado);
                    $("input[name=localidade]").val(resposta.localidade);
                    return; //em caso de erro sai da funcao
                }
                alert(data);
            });
            
        }
    });
});