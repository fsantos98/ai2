/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('autoreditora', {
		idAutor: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idAutor'
		},
		idEditora: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idEditora'
		}
	}, {
		tableName: 'autoreditora'
	});
};
