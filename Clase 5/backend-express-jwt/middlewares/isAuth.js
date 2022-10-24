'use strict'

const { authService } = require("../service");

const isAuth = (req, res, next) => {
  if(!req.headers.authorization){
    return res.status(403).send({message: "No posees permisos para acceder a esta ruta."});
  }

  //Obtenemos el token del header del request
  const token = req.headers.authorization.split(" ")[1];
  //llamamos al service pasando el Token
  //obtenemos el objeto promise y salimos por resolve
  //o por reject por el catch
  authService.decodeToken(token).then(response => {
    req.user = response;
    next();
  }).catch((response) => {
    res.status(response.status).send(response.message);
  });
}

module.exports = isAuth;
