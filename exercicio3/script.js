const paisDeNascimento = prompt("Qual sua nacionalidade")

function ondeNasceu(paisDeNascimento) {
    const nascionalidade = (paisDeNascimento)
    if (paisDeNascimento.toLowerCase() === "brasileira"){
    return (paisDeNascimento)
    }else if (paisDeNascimento.toLowerCase() === "argentina"){
    return (paisDeNascimento)
    }else if (paisDeNascimento.toLowerCase() === "uruguaia"){
    return (paisDeNascimento)
    }else if (paisDeNascimento.toLowerCase() === "chilena"){
    return (paisDeNascimento)
    }else if (paisDeNascimento.toLowerCase() === "colombiana"){
    return(paisDeNascimento)
    }else {
    return ("Nacionalidade não encontrada")}
    
    }

console.log(ondeNasceu(paisDeNascimento));