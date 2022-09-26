const http = require('http');
const userController  = require('./controllers/userController.js');

const hostname = '127.0.0.1';
const port = 3000;

const handlersCallbacks = [];
handlersCallbacks['/users'] = [];
handlersCallbacks['/users']['GET'] = userController.getUsers;
handlersCallbacks['/users']['POST'] = userController.createUser;
handlersCallbacks['/users']['PUT'] = userController.updateUser;
handlersCallbacks['/users']['DELETE'] = userController.createUser;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    
    console.log(req.url);
    console.log(req.method);

    console.log(handlersCallbacks[req.url])

    const callbackToExecute = handlersCallbacks[req.url][req.method];
    if(callbackToExecute){
        callbackToExecute(req, res);
    }else{
        res.end("Error 404 not found");
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});