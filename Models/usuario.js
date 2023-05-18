//criei esta model para fazer a inteiração com o meu banco de dados (acessoLogin).
//a models é a responsabel por manipular o banco (obter dado, inclir dados, alterar, apagar etc)

//crio uma const para incluir a dependencia sequelize agora nesta model aqui
const Sequelize = require('sequelize');

//incluo uma const para realizar atraves dela a conexão com o banco de daods
const db = require('./db');
const sequileze = require('./db');
const { name } = require('ejs');

//crio a tabela "usuarios" atraves desta função, como estou conectado ao banco se gerou aqui a tabela ja sera criada la.
//aqui abaixo estou definindo o nome da tabela, coluna e o tipo de dados que a coluna tera etc...


//🟥AQUI COMEÇOU A DAR ERRO
//const usuario = db.define('usuarios', {
   //id: {
        type: Sequileze.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }

//nome: {
        type: Sequelize.STRING,
        allowNull: false
    }

    //sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
//email: {
        type: Sequelize.STRING,
        allowNull: false
    }

//senha: {
        type: Sequelize.STRING,
        allowNull: false
    }

//});


//agora, o comando para criar de fato a tabela acima no meu banco de dados. Starto o comando no arquivo app.js 
usuario.sync();

module.exports = usuario
