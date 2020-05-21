/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('livrocategoria', {
		idLivro: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idLivro'
		},
		idCategoria: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idCategoria'
		}
	}, {
		tableName: 'livrocategoria'
	});
};
