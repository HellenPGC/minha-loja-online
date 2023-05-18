
const cadastroController = (req, res) => {


    res.render('cadastro', {title: 'Faça seu cadastro'});

}

//conectar cadastrocontroller a app.js.. atraves de exportar e importar
module.exports = cadastroController