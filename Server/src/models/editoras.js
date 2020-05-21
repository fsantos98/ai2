var Sequelize = require('sequelize')
var database = require('./index')

var Editoras = database.sequelize.define('editoras', {
		idEditora: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'idEditora'
		},
		nomeEditora: {
			type: Sequelize.STRING(255),
			allowNull: false,
			field: 'nomeEditora'
		}
	}, {
		tableName: 'editoras'
	});

module.exports = Editoras