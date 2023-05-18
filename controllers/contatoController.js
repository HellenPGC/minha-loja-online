const contatoController = (req, res) => {


    res.render('contato', {title: 'Plante Tech'});

}

//conectar indexcontroller a app.js.. atraves de exportar e importar
module.exports = contatoController