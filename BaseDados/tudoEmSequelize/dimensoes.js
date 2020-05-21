/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dimensoes', {
		idDimensoes: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idDimensoes'
		},
		idLivro: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'idLivro'
		},
		comprimento: {
			type: "DOUBLE",
			allowNull: true,
			field: 'comprimento'
		},
		largura: {
			type: "DOUBLE",
			allowNull: true,
			field: 'largura'
		},
		altura: {
			type: "DOUBLE",
			allowNull: true,
			field: 'altura'
		}
	}, {
		tableName: 'dimensoes'
	});
};
