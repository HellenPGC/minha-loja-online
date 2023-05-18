// aqui configuramos o render. aqui falamos qual arquivo presente na pasta views, deve ser renderizado quando solicitado atraves do http.
//controllers serve para cirar ações junto da MODEL.

const loginController = (req, res) => {


    res.render('login', {title: 'Faça seu login'});

}

//conectar logincontroller a app.js.. atraves de exportar e importar
module.exports = loginController