//requiro a dependencia instalada no projeto (sequelize)
const Sequelize = require('sequelize');

//conecto o banco de dados criado
const sequileze = new Sequelize("acessoLogin", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

//eesa função apenas para  VERIFICAR se a conexão foi realizada sem erro
sequileze.authenticate()
.then(() => {
    console.log("conexão com meu banco de dados esta ok")

}).catch((erro) => {
    console.log("Erro ao fazer a conexão com o banco de dados. Erro localizado: "+erro)
}); 

//exporto para usar o sequilize no projeto
module.exports = sequileze; 
