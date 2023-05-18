const produtosController = (req, res) => {


    res.render('produtos', {title: 'Compre já'});

}

//conectar logincontroller a app.js.. atraves de exportar e importar
module.exports = produtosController
