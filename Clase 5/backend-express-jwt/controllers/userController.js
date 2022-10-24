const User = require("../models/user");
const service = require("../service/authService");
const { validationResult } = require('express-validator');

const signUp = (req, res) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();

  if(hasErrors){
    console.log("HAY ERRORES!")
    console.log(result)
    return res.status(400).send(result);
  }
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });

  /*if(!newUser.email){
    res.status(403).send({messsage:'El campo email es requerido.'})
  }else if(!newUser.password){
    res.status(403).send({messsage:'La clave es requerida.'})
  }*/

  User.findOne({email: newUser.email}, (error, user) => {
    if(user){
      return res.status(403).send({messsage:'El email ingresado ya se encuentra en uso.'});
    }
    newUser.save(error => {
      if(error){
        res.status(500).send({messsage:`Se produjo un error al registrar el nuevo usuario. ${error}`});
      }
      res.status(200).send({token: service.createToken(newUser)});
    });
  });
}

const signIn = (req, res) => {
  const email = req.body.email;
  if(!email){
    res.status(403).send({messsage:`El campo email es requerido.`})
  }
  User.findOne({email: email}, (error, user) => {
    if(error){
      res.status(500).send({messsage:`Se produjo un error al loguear el usuario. ${error}`})
    }
    if(!user || !req.body.password || !user.comparePassword(req.body.password)){
      res.status(404).send({messsage:"El Usuario no existe o la Clave es incorrecta."})
    }

    req.user = user;
    res.status(200).send({message: "Te has logueado correctamente.", token: service.createToken(user)});
  });
}

const sayHi = (req, res) => {
  res.status(200).send("HI!!!! Estas logueado con un JWT valido!")
}


module.exports = {
  signUp,
  signIn,
  sayHi,
};