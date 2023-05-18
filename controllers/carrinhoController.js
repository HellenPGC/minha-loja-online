
const carrinhoController = (req, res) => {


    res.render('carrinho', {title: 'Plante Tech'});

}

//conectar indexcontroller a app.js.. atraves de exportar e importar
module.exports = carrinhoController