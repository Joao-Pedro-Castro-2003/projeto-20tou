function Entrar(event){
    event.preventDefault(); // Prevent form submission

    var usuario = document.getElementById("iusuario").value;
    var senha = document.getElementById("isenha").value;
    var nascimento = document.getElementById("idata").value;

    if(usuario == "GatinhaDoJoao" && senha == "AmorDoJoao123" && nascimento == "2005-05-25"){
        alert(`Bem vinda ${usuario} espero que goste do seu presentinho!`);
        window.location.href = "https://joao-pedro-castro-2003.github.io/projeto-20tou/pages/Cronometro/cronometro.html";

        // http://127.0.0.1:5500/pages/Cronometro/cronometro.html
    }else{
        alert("Usuário, Senha ou Data incorretos");
    }
}