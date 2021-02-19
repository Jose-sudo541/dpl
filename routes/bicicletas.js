

var express = require('express');

var router = express.Router();



let bicicletaController = require('../controllers/bicicleta');


router.get("/", bicicletaController.bicicleta_list);


router.get("/create", bicicletaController.bicicleta_create_get);//ruta por get que llama al metodo bicicleta_create_get en controller 

router.post("/create", bicicletaController.bicicleta_create_post);//ruta por post que llama al metodo bicicleta_create_post en controller 

router.post("/:id/delete", bicicletaController.bicicleta_delete_post);//ruta por post que llama al metodo bicicleta_delete_post en controller

router.get("/:id/update", bicicletaController.bicicleta_update_get);//ruta por get que llama al metodo bicicleta_update_get en controller

router.post("/:id/update", bicicletaController.bicicleta_update_post);//ruta por post que llama al metodo bicicleta_update_get en controller

module.exports = router;