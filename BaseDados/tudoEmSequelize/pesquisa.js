/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pesquisa', {
		idPesquisa: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idPesquisa'
		},
		textoPesquisa: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'textoPesquisa'
		},
		dataPesquisa: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'dataPesquisa'
		}
	}, {
		tableName: 'pesquisa'
	});
};
