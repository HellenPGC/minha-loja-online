
const ofertasController = (req, res) => {


    res.render('ofertas', {title: 'Plante Tech'});

}

//conectar indexcontroller a app.js.. atraves de exportar e importar
module.exports = ofertasController