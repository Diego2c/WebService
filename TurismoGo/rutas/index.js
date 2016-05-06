var ruta=require('express').Router();
var usuario=require('../controller/contoladorUsuario.js');  
ruta.get('/inicio',function(peticion,respuesta){
	respuesta.send("servidor iniciado");
});

/*
	rutas para usuario
*/

ruta.post('/usuario/registro',usuario.registro); 

 module.exports=ruta;
 
