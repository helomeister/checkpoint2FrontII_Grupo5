let Identificador = document.getElementById('inputId');
let Nome = document.getElementById('inputName');
let Sobrenome = document.getElementById('inputLastName')
let apelido = document.getElementById('inputApelido');
let email = document.getElementById('inputEmailCadastro');
let password = document.getElementById('inputPassword');
let repetirSenha = document.getElementById('inputRepeatPassword');
let botaoCadastro = document.getElementById('botaoCadastro');

let nomeCadastroNormalizado;
let apelidoCadastroNormalizado;
let emailCadastroNormalizado;
let passwordCadastroNormalizado;

let nomeEValido = false;
let apelidoEValido = false;
let emailCadastroEValido = false;
let passwordCadastroEvalido = false;

botaoCadastro.setAttribute('disabled', true);
botaoCadastro.innerText = "Bloqueado"

const cadastroObjeto = {
    nome: "",
    sobrenome: "",
    apelido: "",
    email: "",
    password: "",
}

//let identificadorValidacao = document.getElementById('identificadorValidacao');
Nome.addEventListener('blur', function() {
 
let nomeCadastro = document.getElementById('nomeCadastro');
      if (Nome.value != "") {
        //nome tem informação
        nomeCadastro.innerText = ""
        Nome.style.border = ``
        nomeEValido = true;
    } else {
        //nome está vazio
        nomeCadastro.innerText = "Campo obrigatório"
        nomeCadastro.style.color = "#E01E1E"
        nomeCadastro.style.fontSize = "8"
        nomeCadastro.style.fontWeight = "bold"
        Nome.style.border = `1px solid #E01E1E`
        nomeEValido = false;
    }
    validaTelaDeCadastro();
});

Sobrenome.addEventListener('blur', function() {

let sobrenomeCadastro = document.getElementById('sobrenomeCadastro');

    if (Sobrenome.value != "") {
        //sobrenome tem informação
        sobrenomeCadastro.innerText = ""
        Sobrenome.style.border = ``
        sobrenomeEValido = true;
    } else {
        //sobrenome está vazio
        sobrenomeCadastro.innerText = "Campo obrigatório"
        sobrenomeCadastro.style.color = "#E01E1E"
        sobrenomeCadastro.style.fontSize = "8"
        sobrenomeCadastro.style.fontWeight = "bold"
        Sobrenome.style.border = `1px solid #E01E1E`
        sobrenomeEValido = false;
    }
    validaTelaDeCadastro();
});

apelido.addEventListener('blur', function() {

let apelidoCadastro = document.getElementById('apelidoCadastro');

    if (apelido.value != "") {
        //apelido tem informação
        apelidoCadastro.innerText = ""
        apelido.style.border = ``
        apelidoEValido = true;
    } else {
        //apelido está vazio
        apelidoCadastro.innerText = "Campo obrigatório"
        apelidoCadastro.style.color = "#E01E1E"
        apelidoCadastro.style.fontSize = "8"
        apelidoCadastro.style.fontWeight = "bold"
        apelido.style.border = `1px solid #E01E1E`
        apelidoEValido = false;
    }
    validaTelaDeCadastro();
});

email.addEventListener('blur', function() {

let emailCadastro = document.getElementById('emailCadastro');

    if (email.value != "") {
        //email tem informação
        emailCadastro.innerText = ""
        email.style.border = ``
        emailEValido = true;
    } else {
        //email está vazio
        emailCadastro.innerText = "Campo obrigatório"
        emailCadastro.style.color = "#E01E1E"
        emailCadastro.style.fontSize = "8"
        emailCadastro.style.fontWeight = "bold"
        email.style.border = `1px solid #E01E1E`
        emailEValido = false;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        emailCadastro.innerText = " ";
        email.style.backgroundColor = "blue";
        emailEValido = true;
    } else {
        /*Email esta com preenchimento incorreto conforme padrão Regex*/
        emailCadastro.innerText = "O Email não é Válido";
        emailCadastro.style.color = "#E05E";
        emailCadastro.style.fontSize = "10";
        emailCadastro.style.fontWeight = "italic";
        email.style.border = `2 px solid #D01F8E`;
        emailEValido = false;
    }
    validaTelaDeCadastro();
});

password.addEventListener('blur', function() {

let passwordCadastro = document.getElementById('passwordCadastro');

if (password.value != "" && password.value.lenght <= 8) {
    //Senha tem informação
    botaoCadastro.setAttribute('disable', true);
    passwordCadastro.innerText = "";
    password.style.border = "blue";
    passwordEValido = true;
} else {
    //senha está vazio
    botaoCadastro.removeAttribute('disable');
    passwordCadastro.innerText = "Campo obrigatório";
    passwordCadastro.style.color = "#E01E1E";
    passwordCadastro.style.fontSize = "8";
    passwordCadastro.style.fontWeight = "bold"
    password.style.border = `1 px solid# E01E1E `
    passwordEValido = false;
}
    validaTelaDeCadastro();
});

repetirPassword.addEventListener('blur', function() {

 let repetirPasswordCadastro = document.getElementById('repetirPasswordCadastro');

    if (repetirpassword.value == password.value) {
        //repetir senha tem informação igual a senha
        repetirPasswordCadastro.innerText = ""
        repetirPassword.style.border = ``
        repetirPasswordEValido = true;
    } else {
        //repetir senha está vazio
        repetirPasswordCadastro.innerText = "A senha digitada deve ser igual à anterior"
        repetirPasswordCadastro.style.color = "#E01E1E"
        repetirPasswordCadastro.style.fontSize = "8"
        repetirPasswordCadastro.style.fontWeight = "bold"
        repetirPassword.style.border = `1px solid #E01E1E`
        repetirPasswordEValido = false;
    }
    validaTelaDeCadastro();

});

function validaTelaDeCadastro() {
    if (nomeEValido && sobrenomeEValido && apelidoEValido && emailCadastroEValido && passwordCadastroEvalido) {
        botaoCadastro.removeAttribute('disabled')
        botaoCadastro.innerText = "Criar Conta"
        return true
    } else {
        botaoCadastro.setAttribute('disabled', true);
        botaoCadastro.innerText = "Bloqueado"
        return false
    }

}