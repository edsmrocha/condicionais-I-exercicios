const paisDeNascimento = prompt("Qual sua nacionalidade")

function ondeNasceu(paisDeNascimento) {
    const nascionalidade = (paisDeNascimento)
    if (paisDeNascimento.toLowerCase() === "brasileira"){
    return (paisDeNascimento)
    }else if (paisDeNascimento.toLowerCase() === "argentina"){
    return (paisDeNascimento)
    }else if (paisDeNascimento.toLocaleLowerCase() === "uruguaia"){
    return (paisDeNascimento)
    }else if (paisDeNascimento.toLocaleLowerCase() === "chilena"){
    return (paisDeNascimento)
    }else if (paisDeNascimento.toLocaleLowerCase() === "colombiana"){
    return(paisDeNascimento)
    }else {
    return ("Nacionalidade não encontrada")}
    
    }

console.log(ondeNasceu(paisDeNascimento));