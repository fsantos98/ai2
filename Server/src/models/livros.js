var Sequelize = require('sequelize')
var database = require('./index')

/* Modelos das tabelas das bases de dados */
var Linguas = require('./linguas')
var tipoCapas = require('./tipoCapas')
var Editoras = require('./editoras')

// importa o modelo – chave forasteira roleID
// var Generos = require('./generos')
var Livros = database.sequelize.define('livros', {
		idLivro: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'idLivro'
		},
		idLingua: {
			type: Sequelize.INTEGER,
			allowNull: false,
			field: 'idLingua',
			references: {
                model: Linguas,
                key: 'idLingua'
        	}
		}, 
		idTipoCapa: {
			type: Sequelize.INTEGER,
			allowNull: false,
			field: 'idTipoCapa',
			references:{
				model: tipoCapas,
				key: 'idTipoCapa'
			}
		},
		idEditora: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'idEditora',
			references: {
				model: Editoras,
				key: 'idEditora'
			}
		},
		isbn: {
			type: Sequelize.STRING(13),
			allowNull: false,
			field: 'isbn'
		},
		titulo: {
			type: Sequelize.STRING(255),
			allowNull: false,
			field: 'titulo'
		},
		sinopseCurta: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'sinopseCurta'
		},
		sinopseLonga: {
			type: Sequelize.TEXT,
			allowNull: true,
			field: 'sinopseLonga'
		},
		anoPublicacao: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'anoPublicacao'
		},
		ratingLivro: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'ratingLivro'
		},
		numRatings: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'numRatings'
		},
		numPaginas: {
			type: Sequelize.INTEGER,
			allowNull: true,
			field: 'numPaginas'
		}
	}, {
		tableName: 'livros'
	})

module.exports = Livros

