// buscar token jwt de usuario que tem cadastro //

onload = function() {
    let tokenUserjwt = this.localStorage.getItem("jwt");

    //e o tokes wt for vazio ou diferente do token do usuario//

    if (!tokenUserjwt) || (tokenUserjwt = "") {
        window.alert("VOCÊ NÃO TEM PERMISSÃO PARA ACESSAR ESTA PÁGINA. FAVOR RETORNAR PARA A PÁGINA DE LOGIN INICIAL.");


    } else {
        console.log(tokenUserjwt;)
    }
}