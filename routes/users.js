'use strict';

const express = require('express');
const User = require('../models/user');

let router = express.Router();


router.use((req, res, next) => {
  console.log('************************')
  console.log('req.body:', req.body);
  console.log('req.method:', req.method);
  console.log('req.url:', req.url);
  console.log('************************')
  next();
})

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
    User.find({'_id': {$ne: user._id}, 'gender': {$ne: user.gender}}, (err, match) => {
      console.log('match:', match);
      let matchArr = [];

      for(let key in match) {
        let matchCount = 0;
        console.log('match[key].username:', match[key].username);
        if(match[key].dayOrNight === user.dayOrNight) {
          matchCount++
        }
        if(match[key].famous === user.famous) {
          matchCount++
        }
        if(match[key].interest === user.interest) {
          matchCount++
        }
        if(match[key].hobbies === user.hobbies) {
          matchCount++
        }
        if(match[key].food === user.food) {
          matchCount++
        }
        if(match[key].color === user.color) {
          matchCount++
        }
        if(match[key].drink === user.drink) {
          matchCount++
        }
        if(match[key].mean === user.mean) {
          matchCount++
        }
        if(match[key].socialMedia === user.socialMedia) {
          matchCount++
        }
        if(match[key].personality === user.personality) {
          matchCount++
        }
        if(match[key].phone === user.phone) {
          matchCount++
        }
        if(match[key].movies === user.movies) {
          matchCount++
        }
        if(match[key].music === user.music) {
          matchCount++
        }
        if(match[key].steak === user.steak) {
          matchCount++
        }
        if(match[key].continent === user.continent) {
          matchCount++
        }
        if(match[key].crime === user.crime) {
          matchCount++
        }
        if(match[key].pokemon === user.pokemon) {
          matchCount++
        }

        if(matchCount >= 5) {
          matchArr.push(match[key])
        };


        console.log('matchCount:', matchCount);
      }
      res.send(matchArr);
    })
    // .and('_id': {$ne: user._id}, 'gender': {$ne: user.gender})
    // .and([
    //   {$or: [{'_id': {$ne: user._id}, 'gender': {$ne: user.gender}, 'dayOrNight': user.dayOrNight, 'teaOrCoffee': user.teaOrCoffee}]},
    //   {$or: [{'_id': {$ne: user._id}, 'gender': {$ne: user.gender}, 'dayOrNight': user.dayOrNight, 'teaOrCoffee': {$ne: user.teaOrCoffee}}]}
    // ])
    // .exec((err, match) => {
    //   console.log('match:', match);
    //   res.send(match)
    // })

})


// getUser route
router.get('/getUser', User.authMiddleware, (req, res) => {
  console.log('req.user', req.user);

  res.send(req.user);
})


router.get('/getItems', User.authMiddleware, (req, res) => {
  console.log('req in getitems:', req);
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


router.post('/question', User.authMiddleware, (req, res) => {
  let user = req.user;
  console.log('put user:', user);
  console.log('req.body:', req.body);

  User.findByIdAndUpdate(user._id, req.body, (err, newUser )=> {
    res.status(err ? 400: 200).send(err || newUser);
  })

})


//// ----------------------------\\\\\

router.route('/:id')
  .get((req, res) => {
    User.findById(req.params.id, (err, user) => {
      res.status(err ? 400: 200).send(err || user);
    });
  })
  .delete((req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      res.status(err ? 400: 200).send(err || user);
    });
  })
  .put(User.authMiddleware, (req, res) => {
   User.findByIdAndUpdate(req.user._id, req.body,  (err, newUser) => {
     res.status(err ? 400: 200).send(err || newUser);
   })
 })
  .post((req, res) => {
    User.create(req.params.id, (err, user) => {
      res.status(err ? 400 : 200).send(err || user);
    });
  });

module.exports = router;
