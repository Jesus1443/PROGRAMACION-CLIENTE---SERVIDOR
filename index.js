const express = require ('express')
const app = express()

app.get('/', function(req, res){
    res.send('Hola mundo')
})

app.get('/saludo', function(req, res){
    res.send('Hola Jesus')
})

app.get('/despedida', function(req, res){
    res.send('Hasta pronto')
})

app.get('/=', function(req, res){
    res.send('No deberias estar aquí')
})

app.listen (3000, function(){
    console.log ('Tu servidor esta corriendo')
})