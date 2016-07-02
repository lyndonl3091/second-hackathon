'use strict';

let express = require('express');
let router = express.Router();
let Match = require('../models/match');

router.route('/')
  .get((req, res) => {
      Match.find({}, (err, matches) => {
        res.status(err ? 400: 200).send(err || matches);
      });
  })


router.route('/:id')
  .delete((req, res) => {
    Match.findByIdAndRemove(req.params.id, (err, match) => {
      res.status(err ? 400: 200).send(err || match);
    });
  });


module.exports = router;
