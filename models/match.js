'use strict';

const mongoose = require('mongoose');

let matchSchema = new mongoose.Schema ({
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

let Match = mongoose.model('Match', matchSchema);

module.exports = Match;
