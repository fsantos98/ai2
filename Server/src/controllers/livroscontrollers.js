const Livros = require("../models/livros")

const controller = {}

controller.home = async (req, res) => {
    console.log("\t[api/livroscontrollers.js] Request feito pra home")
    const todosLivros = await Livros.findAll()
    .then(data =>{
        return data
    })
    .catch(err =>{
        return err
    })
    res.json({sucess: true, todosLivros})
}

controller.getLivro = async (req, res) => { 
    console.log("\t[api/livroscontrollers.js] Request feito pra getLivro");
    const { id } = req.params;
    console.log("\n\n\n\n" + id);
    return res.json({
        sucess: "Livro encontrado com sucesso! 🤣",
        id: +id,
        nome: "nome do livro"
    }) 
}

controller.getLivrosComGenero = async (req, res) => {
    console.log("\t[api/livroscontrollers.js] Request feito pra getLivrosComGenero");
    res.json({sucess: "🤣1"})
}

controller.criarLivro = async (req, res) => {
    console.log("\t[api/livroscontrollers.js] Request feito pra criarLivro");
    const livroAdicionado = await Livros.create({
        titulo: "O livro dos fortes 4",
        ano: 2004
    })
    .then(data =>{
        return data
    })
    .catch(err =>{
        return err
    })
    res.json({sucess: true, livroAdicionado})
}


module.exports = controller