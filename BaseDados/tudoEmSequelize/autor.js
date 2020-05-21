/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('autor', {
		idAutor: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idAutor'
		},
		nomeAutor: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'nomeAutor'
		}
	}, {
		tableName: 'autor'
	});
};
