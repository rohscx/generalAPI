'use strict';
module.exports = function(app) {
  var generalAPI = require('../controllers/generalController');

  // todoList Routes
  app.route('/store')
    .get(generalAPI.list_all_stores);
    .post(generalAPI.create_a_store);


  app.route('/store/:storeId')
    .get(generalAPI.read_a_store);
    .put(generalAPI.update_a_store);
    .delete(generalAPI.delete_a_store);
};
