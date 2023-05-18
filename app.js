// tem gente que nomeia esta pasta como SERVIDOR 
// chamada padrão para express
// a API é responsavel por definir rotas para o usuario acessar a views (o get mostra a rota)
const express = require('express');
const path = require('path');


//importando arquivo indexcontroller, index:
const indexRouter = require('./routes');

const api = express();

//configurando a localização dos arquivos estaticos (imagem, CSS, ejs etc)
api.use(express.static(path.join(__dirname, 'public')));

// configurando o caminho absoluto
api.set('views', path.join(__dirname, 'views'));

//configurando para usar ejs: 
api.set('view engine', 'ejs');

//banco de dados
const db = require("./Models/db");

//🟥confirmo a criação da minha tabela "usuarios". Rodo o node app.js que a tabela sera criada 
//const usuario = require('./Models/usuario'); 


// configuramos a barra inicial
api.use('/', indexRouter)


//abrir o servidor, para ter onde a pagina renderizar (aparecer) 
api.listen('12345', () => { console.log('servidor ativo')})

module.exports = api; 
 

