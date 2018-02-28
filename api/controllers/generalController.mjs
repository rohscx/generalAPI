'use strict';
import mongoose from 'mongoose';


const Store = mongoose.model('Store');

export function list_all_stores(req, res) {
  Store.find({}, function(err, store) {
    if (err)
      res.send(err);
    res.json(store);
  });
};


export function create_a_store(req, res) {
  var new_store = new Store(req.body);
  new_store.save(function(err, store) {
    if (err)
      res.send(err);
    res.json(store);
  });
};


 export function read_a_store(req, res) {
  Store.findById(req.params.storeId, function(err, store) {
    if (err)
      res.send(err);
    res.json(store);
  });
};


export function update_a_store(req, res) {
  Store.findOneAndUpdate({_id: req.params.storeId}, req.body, {new: true}, function(err, store) {
    if (err)
      res.send(err);
    res.json(store);
  });
};


export function delete_a_store(req, res) {
  Store.remove({
    _id: req.params.storeId
  }, function(err, store) {
    if (err)
      res.send(err);
    res.json({ message: 'Store successfully deleted' });
  });
};
