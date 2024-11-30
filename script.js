// VALIDAÇÕES DOS FORMULÁRIOS
// ========================================================================================================================

// Validação do formulário de Login
document.getElementById("btnLogin").addEventListener("click", (e)=>{
    e.preventDefault
     // Armazena as variáveis de span 
     var inputEmail = document.getElementById("email");
     var restoNome = document.getElementById("resNome");
     var restoSenha = document.getElementById("resSenha");

 
         if (document.forms[0].username.value == "") {
            restoNome.style.display = "block";
            restoNome.innerHTML = "Por favor, preencha seu username ou E-mail corretamente.";
         } else {
            restoNome.style.display = "none";
         }
        if (document.forms[0].senha.value == "") {
            restoSenha.style.display = "block";
             restoSenha.innerHTML = "Por favor, preencha sua senha corretamente.";
         } else {
            restoNome.style.display = "none";
         }
    
  
})

   

// ========================================================================================================================
// Validação do formulário de Login
document.getElementById("btnCadastro").addEventListener("click", (e) => {
    e.preventDefault();

    // Armazena as variáveis de span
    var restoUser = document.getElementById("resUserCad");
    var restoEmail = document.getElementById("resEmailCad");
    var restoSenha = document.getElementById("resSenhaCad");
    
    function checarUser() {
        if (document.forms[0].username.value == "") {
            restoUser.style.display = "block";
            restoUser.innerHTML = "Por favor, insira um username."
        } else {
            restoUser.display = "none";
        }
    }

    function checarEmailCad() {
        if(document.forms[0].email.value == "" ||
        document.forms[0].email.value.indexOf('@') == -1 ||
        document.forms[0].email.indexOf(".") == -1) {
            restoEmail.style.display = "block";
            restoEmail.innerHTML = "Por favor, preencha seu email corretamente.";
        } else {
            restoEmail.style.display = "none";
        }
        
    }

    function checarSenhaCad() {
        if(document.forms[0].senha.value == "") {
            restoSenha.style.display = "block";
            restoSenha.innerHTML = "Por favor, preencha sua senha."
        } else {
            
        }
    }

    checarUser();
    checarEmailCad();
    checarSenhaCad();

})
/* id de cada area do formulário*/
var w = document.getElementById("recuperar-dois")
var x = document.getElementById("login");
var y = document.getElementById("registro");
var z = document.getElementById("recuperar");


/* função tipo carrosel, movendo um fomulário de fora da tela para o centro */

function Login() {
    x.style.left = "100px";
    y.style.right = "-590px";
    z.style.right = "-520px";
    w.style.right = "-520px";
}

// Função inicia ao clicar no "Cadastrar-se" no topo do formulário de login
function Registro() {
    x.style.left = "-590px";
    y.style.right = "100px";
}
function Redefinir() {
    x.style.left = "-590px";

    z.style.right = "90px";
}
function RedefinirDois() {
    z.style.left = "-590px";
    w.style.right = "90px";
}
