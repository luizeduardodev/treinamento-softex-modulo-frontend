const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    "bd_softex",
    "root",
    "luiz2080mysqlroot2080eduardo",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

const Pessoa = db.define("pessoa", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    uf: {
        type: Sequelize.CHAR(2),
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Pessoa.sync();

sequelize
    .authenticate()
    .then(() => {
        console.log("Conexão bem-sucedida com o banco de dados!");
    })
    .catch((error) => {
        console.error("Conexão não estabelecida com o banco de dados", error);
    });

module.exports = sequelize;
