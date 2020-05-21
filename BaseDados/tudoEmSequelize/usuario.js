/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('usuario', {
		idUsuario: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idUsuario'
		},
		username: {
			type: DataTypes.STRING(32),
			allowNull: false,
			field: 'username'
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'password'
		},
		nomeUsuario: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'nomeUsuario'
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'email'
		},
		dataRegisto: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'dataRegisto'
		}
	}, {
		tableName: 'usuario'
	});
};
