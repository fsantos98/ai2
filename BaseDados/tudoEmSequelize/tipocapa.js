/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tipocapa', {
		idTipoCapa: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idTipoCapa'
		},
		nomeTipoCapa: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'nomeTipoCapa'
		},
		descricaoTipoCapa: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'descricaoTipoCapa'
		}
	}, {
		tableName: 'tipocapa'
	});
};
