/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('livroautor', {
		idLivro: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idLivro'
		},
		idAutor: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idAutor'
		}
	}, {
		tableName: 'livroautor'
	});
};
