const Filmes = require("../models/filmes")

const controller = {}

controller.home = async (req, res) => {
    console.log("\t[api/filmescontrollers.js] Request feito pra home")
    const todosFilmes = await Filmes.findAll()
    .then(data =>{
        return data
    })
    .catch(err =>{
        return err
    })
    res.json({sucess: true, todosFilmes})
}

controller.getFilme = async (req, res) => { 
    console.log("\t[api/filmescontrollers.js] Request feito pra getFilme");
    const { id } = req.params;
    console.log("\n\n\n\n" + id);
    return res.json({
        sucess: "Filme encontrado com sucesso! 🤣",
        id: +id,
        nome: "nome do filme"
    }) 
}

controller.getFilmesComGenero = async (req, res) => {
    console.log("\t[api/filmescontrollers.js] Request feito pra getFilmeComGenero");
    res.json({sucess: "🤣1"})
}

controller.criarFilme = async (req, res) => {
    console.log("\t[api/filmescontrollers.js] Request feito pra criarFilme");
    const filmeAdicionado = await Filmes.create({
        titulo: "O filme dos fortes 4",
        ano: 2004
    })
    .then(data =>{
        return data
    })
    .catch(err =>{
        return err
    })
    res.json({sucess: true, filmeAdicionado})
}


module.exports = controller