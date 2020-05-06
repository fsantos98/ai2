var Sequelize = require('sequelize')
var db = {}

const sequelize = new Sequelize(
    'projeto_pratico_ai2',
    'postgres',
    'pg',
    {
        host: 'localhost',
        port: '5432',
        dialect: 'postgres'
    }
)
sequelize.sync();
console.log("\t[models/index.js] Ligação á base de dados estabelecida")

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db