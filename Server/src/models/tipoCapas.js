var Sequelize = require('sequelize')
var database = require('./index')

var tipoCapas = database.sequelize.define('tipocapas', {
		idTipoCapa: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'idTipoCapa'
		},
		nomeTipoCapa: {
			type: Sequelize.STRING(255),
			allowNull: false,
			field: 'nomeTipoCapa'
		},
		descricaoTipoCapa: {
			type: Sequelize.STRING(255),
			allowNull: true,
			field: 'descricaoTipoCapa'
		}
	}, {
		tableName: 'tipocapas'
    });

module.exports = tipoCapas