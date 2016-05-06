var mysql	   = require('mysql');
var connection = mysql.createConnection({
	host	  : 'localhost',
	user 	  : 'root',
	passworrd : '',
	database  : 'turismodiego'
});

connection.connect();

var usuario={
	registro:function(peticion,res){
		connection.query("CALL AgregarUsuario('"+peticion.body.idRol+"','"+peticion.body.nombre+"','"+peticion.body.correo+"','"+peticion.body.nick+"','"+peticion.body.pass+"');",function(err){
			if(err)
				throw err;
			else	
				res.json({"mensaje":"Objeto Agregado Correctamente"});
		});
	}
 }
 module.exports=usuario;
 