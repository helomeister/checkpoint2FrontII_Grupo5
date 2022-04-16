let nome = document.getElementById('inputName');
let apelido = document.getElementById('inputApelido');
let email = document.getElementById('inputEmailCadastro');
let senha = document.getElementById('inputSenhaCadastro');
let repetirSenha = document.getElementById('inputRepetirSenha');
let botaoCadastro = document.getElementById('botaoCadastro');

let nomeCadastroNormalizado;
let apelidoCadastroNormalizado;
let emailCadastroNormalizado;
let senhaCadastroNormalizado;

let nomeEValido = false;
let apelidoEValido = false;
let emailCadastroEValido = false;
let senhaCadastroEvalido = false;

botaoCadastro.setAttribute('disabled',true);
botaoCadastro.innerText = "Bloqueado"

const cadastroObjeto = {
    nome:"",
    apelido:"",
    email:"",
    senha:"",
}

nome.addEventListener('blur', function() {
    //Capturando o elemento <Small> do html
    let nomeCadastro = document.getElementById('nomeCadastro');
    let apelidoCadastro = document.getElementById('apelidoCadastro');
    let emailCadastro = document.getElementById('emailCadastro');
    let senhaCadastro = document.getElementById('senhaCadastro');
    let repetirSenhaCadastro = document.getElementById('repetirSenhaCadastro');

    if (nome.value != "") {
        //nome tem informação
        nomeCadastro.innerText = ""
        nome.style.border = ``
        nomeEValido = true;
    } else {
        //nome está vazio
        nomeCadastro.innerText = "Campo obrigatório"
        nomeCadastro.style.color = "#E01E1E"
        nomeCadastro.style.fontSize = "8"
        nomeCadastro.style.fontWeight = "bold"
        nome.style.border = `1px solid #E01E1E`
        nomeEValido = false;
    }

    if (apelido.value != "") {
        //nome tem informação
        apelidoCadastro.innerText = ""
        apelido.style.border = ``
        apelidoEValido = true;
    } else {
        //nome está vazio
        apelidoCadastro.innerText = "Campo obrigatório"
        apelidoCadastro.style.color = "#E01E1E"
        apelidoCadastro.style.fontSize = "8"
        apelidoCadastro.style.fontWeight = "bold"
        apelido.style.border = `1px solid #E01E1E`
        apelidoEValido = false;
    }

    if (email.value != "") {
        //nome tem informação
        emailCadastro.innerText = ""
        email.style.border = ``
        emailEValido = true;
    } else {
        //nome está vazio
        emailCadastro.innerText = "Campo obrigatório"
        emailCadastro.style.color = "#E01E1E"
        emailCadastro.style.fontSize = "8"
        emailCadastro.style.fontWeight = "bold"
        email.style.border = `1px solid #E01E1E`
        emailEValido = false;
    }

    if (senha.value != "") {
        //nome tem informação
        senhaCadastro.innerText = ""
        senha.style.border = ``
        senhaEValido = true;
    } else {
        //nome está vazio
        senhaCadastro.innerText = "Campo obrigatório"
        senhaCadastro.style.color = "#E01E1E"
        senhaCadastro.style.fontSize = "8"
        senhaCadastro.style.fontWeight = "bold"
        senha.style.border = `1px solid #E01E1E`
        senhaEValido = false;
    }

    if (repetirSenha.value != "") {
        //nome tem informação
        repetirSenhaCadastro.innerText = ""
        repetirSenha.style.border = ``
        repetirSenhaEValido = true;
    } else {
        //nome está vazio
        repetirSenhaCadastro.innerText = "Campo obrigatório"
        repetirSenhaCadastro.style.color = "#E01E1E"
        repetirSenhaCadastro.style.fontSize = "8"
        repetirSenhaCadastro.style.fontWeight = "bold"
        repetirSenha.style.border = `1px solid #E01E1E`
        repetirSenhaEValido = false;
    }
    validaTelaDeCadastro();
    
});

function validaTelaDeCadastro() {
    if (nomeEValido && apelidoEValido && emailCadastroEValido && senhaCadastroEvalido) {
        botaoCadastro.removeAttribute('disabled')
        botaoCadastro.innerText = "Cadastrar"
        return true
    } 
      else {
        botaoCadastro.setAttribute('disabled', true);
        botaoCadastro.innerText = "Bloqueado"
        return false
    }
    
}