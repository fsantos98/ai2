var Sequelize = require('sequelize')
var database = require('./index')

var Linguas = database.sequelize.define('linguas', {
		idLingua: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'idLingua'
		},
		nomeLingua: {
			type: Sequelize.STRING(255),
			allowNull: true,
			field: 'nomeLingua'
		}
	}, {
		tableName: 'linguas'
	});


module.exports = Linguas