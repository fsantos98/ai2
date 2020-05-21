/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('editora', {
		idEditora: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idEditora'
		},
		nomeEditora: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'nomeEditora'
		}
	}, {
		tableName: 'editora'
	});
};
