
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
//const app = require("./app");

const routes = require('./routes');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Necesitamos llamar a esta funcion 
// para poder acceder a process.env
dotenv.config();

app.use('/api', routes);

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true }, (error, response) => {
  if(error){
    return console.log(`Error al conectar a la base de datos ${error}`);
  }
  console.log("Conexion a la base de datos establecida. ");
  app.listen(process.env.PORT, () => {
    console.log(`Hamster rolling on port ${process.env.port}`);
  });
});