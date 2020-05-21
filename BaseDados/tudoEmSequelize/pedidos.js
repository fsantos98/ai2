/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pedidos', {
		idPedido: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idPedido'
		},
		idUsuario: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'idUsuario'
		},
		isbnPedido: {
			type: DataTypes.STRING(13),
			allowNull: false,
			field: 'isbnPedido'
		},
		qntPedidos: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'qntPedidos'
		}
	}, {
		tableName: 'pedidos'
	});
};
