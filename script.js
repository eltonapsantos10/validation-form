/*const para = document.createElement("p");
para.innerHTML = "My name is Elton"
document.body.appendChild(para)

const subTitle = document.createElement("h2");
subTitle.innerHTML = "Isso é um subtítulo!!!";
document.getElementById("titulo").appendChild(subTitle)

if(input.value == " "){
    console.log("informe seus dados")
}*/

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === ""){
        alert("Preencha seu nome!");
        return
    }

    if(emailInput.value === "" || !isValidEmail(emailInput.value)){
        alert("Preenche seu email!");
        return;
        
    }
   
    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa ter no mínimo 8 caracteres");
        return;
    }

    // Verificar se a siatuação foi selecionada
    if(jobSelect.value === ""){
        alert("Por favor, selecione a sua situação");
        return;
    }

    // Verificar se a mensagem está preenchida
    if(messageTextarea.value === ""){
        alert("Por favor, escreva uma mensagem")
        return;
    }


    // verifica se está preenchida

    //Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();

});


//função que valida e-mail
function isValidEmail(email){
    //Cria uma regex para validar email
    const emailRegex = new RegExp(

     /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;

}


//função que valida senha
function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        // Senha válida
        return true
    }
    
    // Senha inválida
    return false

}




