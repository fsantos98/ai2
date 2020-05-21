/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('categoria', {
		idCategoria: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idCategoria'
		},
		nome: {
			type: DataTypes.STRING(20),
			allowNull: false,
			field: 'nome'
		}
	}, {
		tableName: 'categoria'
	});
};
