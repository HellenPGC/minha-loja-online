const solucoesController = (req, res) => {


    res.render('solucoes', {title: 'Blog Plante Tech'});

}

//conectar quemsomoscontroller a app.js.. atraves de exportar e importar
module.exports = solucoesController