/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('lingua', {
		idLingua: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idLingua'
		},
		nomeLingua: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'nomeLingua'
		}
	}, {
		tableName: 'lingua'
	});
};
