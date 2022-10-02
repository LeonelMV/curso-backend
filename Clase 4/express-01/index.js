
const express = require('express');
const dotenv = require('dotenv')

const app = express();
const port = 3000;

// Necesitamos llamar a esta funcion 
// para poder acceder a process.env
dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log("Mi variable de entorno es --> " + process.env.TEST_VARIABLE);
  console.log(`Hamster rolling on port ${process.env.port}`);
});