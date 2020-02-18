const http = require('http');
const url = require('url');
const petshop = require('./petshop');

const server = http.createServer((req, res) => {
    //console.log("Rodou!!!!");
    res.writeHead(200, {"Content-Type":"text/plain; charset=UTF-8"});
    res.write('**Bem vindos ao PetShop**');
    
    let urlCompleta = url.parse(req.url, true);//retorna um objeto com partes da url
    let queryString = urlCompleta.query;
    let rota = urlCompleta.pathname;

    //Criando rotas
    switch(rota){
        case "/pets":
            const pets = petshop.listarPets();

            if(pets.length > 0 ){
                res.write(pets);
            }else{
                res.write("Nenhum pet cadastrado!");
            }
            break;

        case "/pets/add":
            let novoPet = queryString;
            if(petshop.adicionarPet(novoPet)){
                res.write(`${novoPet.nome} foi adicionado com sucesso!`);
            }else{
                res.write("Ops, algo deu errado!");
            }
            break;

        case "/pets/buscar":
            let petsEncontrados = petshop.buscarPet(queryString.nome);

            if(petsEncontrados.length > 0){
                res.write(`Encontramos ${petsEncontrados} pets como o nome ${queryString.nome}`);
            }else{
                res.write("Ops, não encontramos nenhum pet com esse nome!");
            }
            break;

        default:
            res.write("**PetShop DH**");
    }

    res.end();
}).listen(3000, "localhost", () => {
    console.log("Servidor foi iniciado!");
});