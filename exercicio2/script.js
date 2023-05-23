
const idade = prompt ("Qual sua idade?")
const medio = prompt ("Terminou o ensino médio?")
const facul = prompt ("Está cursando alguma faculdade?")

function aluno (idade, medio, facul){
        if (idade >= 18) {
        console.log("A pessoa é maior de idade");
        }else {
        console.log("A pessoa é menor de idade")
        }
        if (medio.toLowerCase() === "Sim") {
        console.log("Terminou ensino médio");
        } else{
        console.log("Não terminou ensino médio");
    }
        if (facul.toLowerCase() === "sim"){
        console.log("Está cursando faculdade!");
        } else {
        console.log("Não está cursando faculdade!");    
        }       
     }
   


aluno(idade,medio,facul)