/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('configuracoes', {
		idConfiguracao: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idConfiguracao'
		},
		idUsuario: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'idUsuario'
		},
		modoEscuro: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			field: 'modoEscuro'
		}
	}, {
		tableName: 'configuracoes'
	});
};
