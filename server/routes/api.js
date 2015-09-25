var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose-q')(require('mongoose'), {spread:true}),
  Project = require('../models/project.js');

// HTTP get all request
router.get('/projects', function(req, res, next) {
  Project.findQ()
    .then(function(result) {
      res.json(result);
    })
    .catch(function(err) {
      res.send(err);
    })
    .done();
});
// HTTP get single request
router.get('/projects/:id', function(req, res, next) {
  var query = {'_id': req.params.id};
  Project.findByIdQ(query)
    .then(function(result) {
      res.json(result);
    })
    .catch(function(err) {
      res.send(err);
    })
    .done();
});
// HTTP post one request
router.post('/projects', function(req, res, next) {
  new Project(req.body)
    .saveQ(function(err, data) {
     if (err) {
      res.json({'message': err});
    } else {
      res.json(data);
    }
  });
});
// HTTP put single request
router.put('/projects/:id', function(req, res, next) {
  var query = {'_id': req.params.id}, options = {new: true};
  Project.findOneAndUpdateQ(query, req.body, options)
    .then(function(result) {
      res.json(result);
    })
    .catch(function(err) {
      res.send(err);
    })
    .done();
});
//HTTP delete single request
router.delete('/projects/:id', function(req, res, next) {
  Project.findByIdAndRemoveQ(req.params.id)
    .then(function(result) {
      res.json(result);
    })
    .catch(function(err) {
      res.json(err);
    })
    .done();
});

// Angular Application loading single view file
router.get('*', function(req, res) {
  res.sendFile('../client/public/index.html');
});

module.exports = router;
