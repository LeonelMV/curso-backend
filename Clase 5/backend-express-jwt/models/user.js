'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
   email: { type: String, unique: true, lowercase: true, required: true },
   password: { type: String, select: true, required: true },
   registerDate: { type: Date, default: Date.now() },
});

//.pre es una funcion que se ejecuta ANTES de determinada
//accion, en este caso, antes del save (insert en la base)
UserSchema.pre("save", function(next) {
  //Hacemos referencia al usuario que se esta guardando
  let user = this;

  if(!user.isModified('password')){
    return next();
  }

  bcrypt.genSalt(10, (error, salt) => {
    if(error){
      return next(error);
    }
    bcrypt.hash(user.password, salt, null, (error, hash) => {
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(password){
  let user = this;
  return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('User', UserSchema);
