let pets = [{nome:"batmaan"}, {nome:"robiiin"}];
const listarPets = () => {
    let conteudo = "";
    for(let pet of pets){
        conteudo += `
        ---------------
        ${pet.nome}
        ---------------`;
    }
    return conteudo;
};

const adicionarPet = novoPet => {
    return pets.push(novoPet);
};

const buscarPet = nomePet=>{
    let petsEncontrados =  pets.filter(pet => {
        return pets.nome == nomePet;
    });
    return petsEncontrados;
};
module.exports = {listarPets, adicionarPet, buscarPet};