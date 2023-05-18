//aqui é o padrao para chamar o express: 
const express = require('express');
const router = express.Router();

//index
const indexController = require('../controllers/indexController');

//login
const loginController = require('../controllers/loginController');

//cadastro
const cadastroController = require('../controllers/cadastroController');

//quem somos 
const quemsomosController = require('../controllers/quemsomosController');

//produtos
const produtosController = require('../controllers/produtosController');

//contato
const contatoController = require('../controllers/contatoController');

//solucoes
const solucoesController = require('../controllers/solucoesController');

//carrinho
const carrinhoController = require('../controllers/carrinhoController');

//ofertas
const ofertasController = require('../controllers/ofertasController');

 
//toda as configurações de rotas e qual a view colocamos aqui! A rota é quem aponta para nosso app.js qual
//a view que é carregada em um determinado http.

//pagina inicial
router.get("/index", indexController);

//pagina de login
router.get("/login", loginController);

//pagina de cadastro 
router.get("/cadastro", cadastroController);

//pagina de quem somos 
router.get("/quem-somos", quemsomosController);

//pagina produtos
router.get("/produtos", produtosController);

//contato
router.get("/contato", contatoController);

//solucoes
router.get("/solucoes", solucoesController);

//carrinho
router.get("/carrinho", carrinhoController);

//ofertas
router.get("/ofertas", ofertasController);


module.exports = router; 

