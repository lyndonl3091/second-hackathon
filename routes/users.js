'use strict';

const express = require('express');
const User = require('../models/user');

let router = express.Router();



router.get('/', (req, res) => {

  console.log('req.cookies:', req.cookies);
  User.find({}, (err, users) => {
      if (err) return res.status(400).send(err);
      res.send(users);
      console.log('users in get route', users);
  })

});
router.get('/getMatch', User.authMiddleware,(req, res) => {
  console.log('req.user', req.user);
  let user = req.user;
    User.find( {'_id': {$ne: user._id}}, {new:true}, (err, match) => {
      console.log('match:', match);
      res.send(match);
    }
  )
})


// getUser route
router.get('/getUser', User.authMiddleware, (req, res) => {
  console.log('req.user', req.user);

  res.send(req.user);
})

router.post('/register', (req, res) => {
    User.register(req.body, err => {
        res.status(err ? 400 : 200).send(err);
    })
});

router.post('/login', (req, res) => {
  console.log('req.body', req.body);
    User.authenticate(req.body, (err, token) => {
      if(err) return res.status(400).send(err);

      console.log('token,', token);
      res.cookie('authtoken', token).send(token);

    });
});

router.post('/loginnow', (req, res) => {
  User.sendId(req.body, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
    console.log('user in users!:', user);
  })
})

router.post('/logout', (req, res) => {
  res.clearCookie('authtoken').send();
})

router.put('/question', User.authMiddleware, (req, res) => {
  let user = req.user;
  console.log('put user:', user);
  console.log('req.body:', req.body);

  User.findByIdAndUpdate(user._id, req.body, {new:true}, (err, newUser )=> {
    res.status(err ? 400: 200).send(err || newUser)
  })

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
    User.create(req.params.id, (err, user) => {
      res.status(err ? 400 : 200).send(err || user);
    });
  });

module.exports = router;
