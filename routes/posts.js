'use strict';

let express = require('express');
let router = express.Router();
let Post = requier('../models/post');

// router.route('/')
// .get, .post, .delete

router.route('/')
  .get((req, res) => {
      Post.find({}, (err, posts) => {
        res.status(err ? 400: 200).send(err || posts);
      });
  })
  .post((req, res) => {
    Post.create(req.body, (err, post) => {
      res.status(err ? 400: 200).send(err || post);
    });
  });

router.route('/:id')
  .get((req, res) => {
    Post.findById(req.params.id, (err, post) => {
      res.status(err ? 400: 200).send(err || post);
    });
  })
  .put((req, res) => {
    Post.findByIdAndUpdate(req.params.id, (err, post) => {
      res.status(err ? 400: 200).send(err || post);
    });
  })
  .delete((req, res) => {
    Post.findByIdAndRemove(req.params.id, (err, post) => {
      res.status(err ? 400: 200).send(err || post);
    });
  });


module.exports = router;