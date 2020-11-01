const express = require('express');
const app= express();
const morgan = require('morgan');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);

//funcion que procesa datos antes que el servidor los reciva(middlewares)
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/api/autos',require('./routes/autos')); 

//empesando el servidor
app.listen(app.get('port'), ()=>{
 console.log(`Server on port ${app.get('port')}`)
});