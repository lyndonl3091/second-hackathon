'use strict';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const secret = "Cade's Angels";

let userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  image: {data: Buffer, contentType: String},
  gender: {type: String},
  interest: {type: String},
  hobbies: {type: String},
  food: {type: String},
  color: {type: String},
  drink: {type: String},
  dayOrNight: {type: String},
  pokemon: {type: String},
  mean: {type: String},
  socialMedia: {type: String},
  personality: {type: String},
  teaOrCoffee: {type: String},
  phone: {type: String},
  movies: {type: String},
  music: {type: String},
  steak: {type: String},
  famous: {type: String},
  continent: {type: String},
  crime: {type: String}
 });

 userSchema.statics.authMiddleware = function(req, res, next) {

  let token = req.cookies.authtoken;

  jwt.verify(token, secret, function (err, payload)  {
    if(err) return res.status(401).send(err);

    User.findById(payload._id, (err, user) => {
      if(err || !user) return res.status(401).send(err || {error: 'User not found.'});

      req.user = user;

      next();
    }).select('-password');
  })

}

userSchema.statics.register = function(userObj, cb) {
  //check that username is not taken
  //create a new user document

  this.findOne({username: userObj.username}, (err, user) => {
    if(err || user) return cb(err || {error: 'Username already taken.'});

    this.create(userObj, err => { //no newUser in cb so password can't be shown
      cb(err);
    })

  })
};


userSchema.statics.authenticate = function(userObj, cb) {

  console.log('userObj in authenticate', userObj);

  User.findOne({username: userObj.username}, (err, user) => {
    if(err) return cb(err);
    console.log('dbUser', user);

    if(!user || user.password !== userObj.password) {

      return cb({error: 'Invalid username or password'});
    }
    let token = user.generateToken();

    cb(null, token);
  });

};

userSchema.statics.sendId = function(userObj, cb) {
  User.findOne({username: userObj.username}, (err, user) => {
    if(err) return cb(err);
    if(!user || user.password !== userObj.password) {
      return cb({error: 'FORBIDDEN'});
      console.log('user in sendid:', user);
    }
    let id = user._id;
    cb(null, id);
  })
}

userSchema.methods.generateToken = function() {
  let payload = {
    _id: this._id
  }

  let token = jwt.sign(payload, secret, {expiresIn: '1 day'} );
  return token;
  console.log('payload._id', payload._id);
};

let User = mongoose.model('User', userSchema);

module.exports = User;
