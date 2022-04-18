//funções para validaçãodas apis//

// Api users//
function userSucess(jsonRecebido) {
    console.log("Json que recebemos ao se cadastrar ");
    windows.alert("A inclusão do Usuário cadastrado foi efetuada com sucesso");

}

function userErro(errou) {
    if (result.status == 400) {
        alert("Usuário já esta cadastrado"); {
            else {
                if (result.status == 500)
                    window.alert("Erro no Servidor,favor reiniciar a pagina");
            }
        }
    }
}

//api users/login//
function loginSucess(jwtRecebido) {
    console.log("Json que recebemos ao efetuar o login  ");
    console.log(jwtRecebido);
    window.alert("USUÁRIO LOGADO COM SUCESSO");

    //atuaizar a pagina/sessao perde a Informação//
    localStorage.setItem("jwt", jwtRecebido);

    //Mandar o usuario para a pagina tarefas.html//
    window.location.href = "tarefas.html";
}
//duvida como declarar esta certo?//
function loginErro(errou) {
    let validarLogin = document.getElementById("passwordValidacao");

    //Limpa campo de senha e email ao errar o login//

    if (resposta.status == 400) {
        window.alert("Os dados do usuário foram digitados incorretamente.");
        emailLogin.value = "";
        passwordLogin.value = "";
    } else {
        if (resposta.status == 404)
            window.alert("Usuário não Existe, favor entrar com usuário já cadastrado ou efetuar a inclusão do novo usuário");
        emailLogin.value = "";
    }
} else {
    if (resposta.status == 500)
        window.alert("Erro no Servidor,favor reiniciar a pagina");
}