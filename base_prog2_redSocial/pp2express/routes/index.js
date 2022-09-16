var express = require('express');
var router = express.Router();
const indexController = require ('../controladores/indexcontroller')

/* GET home page. */

router.get('/', indexController.home);

router.get('/busqueda/:id', indexController.busqueda);

module.exports = router;
