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
  .post((req, res) => {
    Match.create(req.body, (err, match) => {
      res.status(err ? 400: 200).send(err || match);
    });
  })
  .delete((req,res) => {
    Match.deleteMany({}, (err, match) => {
      res.status(err ? 400: 200).send(err || match);
    })
  })

router.route('/:id')
  .get((req, res) => {
    Match.findById(req.params.id, (err, match) => {
      res.status(err ? 400: 200).send(err || match);
    });
  })
  .put((req, res) => {
    Match.findByIdAndUpdate(req.params.id, (err, match) => {
      res.status(err ? 400: 200).send(err || match);
    });
  })
  .delete((req, res) => {
    Match.findByIdAndRemove(req.params.id, (err, match) => {
      res.status(err ? 400: 200).send(err || match);
    });
  });


module.exports = router;
