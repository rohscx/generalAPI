'use strict';


var mongoose = require('mongoose'),
  Store = mongoose.model('Store');

exports.list_all_stores = function(req, res) {
  Store.find({}, function(err, store) {
    if (err)
      res.send(err);
    res.json(store);
  });
};




exports.create_a_store = function(req, res) {
  var new_store = new Store(req.body);
  new_store.save(function(err, store) {
    if (err)
      res.send(err);
    res.json(store);
  });
};


exports.read_a_store = function(req, res) {
  Store.findById(req.params.storeId, function(err, store) {
    if (err)
      res.send(err);
    res.json(store);
  });
};


exports.update_a_store = function(req, res) {
  Store.findOneAndUpdate({_id: req.params.storeId}, req.body, {new: true}, function(err, store) {
    if (err)
      res.send(err);
    res.json(store);
  });
};


exports.delete_a_store = function(req, res) {


  Store.remove({
    _id: req.params.storeId
  }, function(err, store) {
    if (err)
      res.send(err);
    res.json({ message: 'Store successfully deleted' });
  });
};
