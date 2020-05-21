/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('livroreviews', {
		idLivroReviews: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idLivroReviews'
		},
		idLivro: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'idLivro'
		},
		idUsuario: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'idUsuario'
		},
		ratingLivro: {
			type: DataTypes.INTEGER(6),
			allowNull: false,
			field: 'ratingLivro'
		},
		tituloReview: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'tituloReview'
		},
		textoReview: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'textoReview'
		},
		dataReview: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'dataReview'
		},
		votosPositivos: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'votosPositivos'
		},
		votosNegativos: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'votosNegativos'
		}
	}, {
		tableName: 'livroreviews'
	});
};
