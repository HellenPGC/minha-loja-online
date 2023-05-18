// aqui configuramos o render. aqui falamos qual arquivo presente na pasta views, deve ser renderizado quando solicitado atraves do http.
//controllers serve para cirar ações junto da MODEL.

const indexController = (req, res) => {


    res.render('index', {title: 'Plante Tech'});

}

//conectar indexcontroller a app.js.. atraves de exportar e importar
module.exports = indexController