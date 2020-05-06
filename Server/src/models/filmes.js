var Sequelize = require('sequelize')
var database = require('./index')

// importa o modelo – chave forasteira roleID
// var Generos = require('./generos')
var Filmes = database.sequelize.define('filmes', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		titulo: Sequelize.STRING,
		ano: Sequelize.INTEGER
	}, {
		timestamps: false,
	}
)

console.log("\t[models/filmes.js] Criada a tabela filmes.js")
// Filmes.belongsTo(Generos)
module.exports = Filmes
