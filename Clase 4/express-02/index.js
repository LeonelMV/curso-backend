
const express = require('express');
const dotenv = require('dotenv');

const routes = require('./routes');

const { testMiddleware } = require('./middlewares');
const { testController } = require('./controllers');

const app = express();
const port = 3000;

// Necesitamos llamar a esta funcion 
// para poder acceder a process.env
dotenv.config();
//app.use('/api', routes);
app.use(testMiddleware);

app.use('/test', testController.sayHelloWorld);

app.listen(port, () => {
  console.log("Mi variable de entorno es --> " + process.env.TEST_VARIABLE);
  console.log(`Hamster rolling on port ${process.env.port}`);
});