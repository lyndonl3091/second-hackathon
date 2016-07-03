'use strict';

let express = require('express');
let router = express.Router();
let Match = require('../models/match');

const User = require('../models/user');

router.get('/getMatch', User.authMiddleware, (req, res) => {
  console.log('req.user', req.user);
  let user = req.user;
    Matches.find({}).$where("")
  res.send(req.user);
})


router.route('/:id')
  .delete((req, res) => {
    Match.findByIdAndRemove(req.params.id, (err, match) => {
      res.status(err ? 400: 200).send(err || match);
    });
  });

  


module.exports = router;
