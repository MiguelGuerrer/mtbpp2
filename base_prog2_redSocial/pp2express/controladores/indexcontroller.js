//requires


//metodos
const indexController = {
  home: function(req, res) {
      res.render('index');
    },
    busqueda: function(req, res) {
      res.render('resultadoBusqueda');
    },
}

//exportaciones

module.exports = indexController;