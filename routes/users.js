'use strict';

const express = require('express');
const User = require('../models/user');

let router = express.Router();



router.get('/', (req, res) => {

    console.log('req.cookies:', req.cookies);
    User.find({}, (err, users) => {
        if (err) return res.status(400).send(err);
        res.send(users)

    })
});

router.post('/register', (req, res) => {
    User.register(req.body, err => {
        res.status(err ? 400 : 200).send(err);
    })
});

router.post('/login', (req, res) => {
    User.authenticate(req.body, (err, token) => {
      if(err) return res.status(400).send(err);

      res.cookie('authtoken', token).send()

    });

});

router.post('/logout', (req, res) => {
  res.clearCookie('authtoken').send();
})

//// ----------------------------\\\\\

router.route('/:id')
  .get((req, res) => {
    User.findById(req.params.id, (err, user) => {
      res.status(err ? 400: 200).send(err || user);
    });
  })
  .put((req, res) => {
    User.findByIdAndUpdate(req.params.id, (err, user) => {
      res.status(err ? 400: 200).send(err || user);
    });
  })
  .delete((req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      res.status(err ? 400: 200).send(err || user);
    });
  })
  .post((req, res) => {
    User.create(req.body, (err, user) => {
      res.status(err ? 400 : 200).send(err || user);
    });
});

module.exports = router;
