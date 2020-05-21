/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('livro', {
		idLivro: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'idLivro'
		},
		idLingua: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'idLingua'
		},
		idTipoCapa: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'idTipoCapa'
		},
		idEditora: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'idEditora'
		},
		isbn: {
			type: DataTypes.STRING(13),
			allowNull: false,
			field: 'isbn'
		},
		titulo: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'titulo'
		},
		sinopseCurta: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'sinopseCurta'
		},
		sinopseLonga: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'sinopseLonga'
		},
		lingua: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'lingua'
		},
		anoPublicacao: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'anoPublicacao'
		},
		ratingLivro: {
			type: DataTypes.INTEGER(6),
			allowNull: true,
			field: 'ratingLivro'
		},
		numRatings: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'numRatings'
		},
		numPaginas: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'numPaginas'
		}
	}, {
		tableName: 'livro'
	});
};
