const quemsomosController = (req, res) => {


    res.render('quem-somos', {title: 'Nosso DNA'});

}

//conectar quemsomoscontroller a app.js.. atraves de exportar e importar
module.exports = quemsomosController