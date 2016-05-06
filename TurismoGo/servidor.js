 var express=require('express');
 var morgan=require('morgan');
 var bodyparser=require('body-parser');
 var app=express();
 var puerto=3000;
 var mysql=require('mysql');

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({
	extended:false 
}));
app.use(bodyparser.json());
app.use('/api/v1',require('./rutas'));
 
 app.listen(puerto,function(){
	console.log("Servidor iniciado en el Puerto: "+puerto);
 });
