'use strict';
import * as generalAPI from '../controllers/generalController'

export const appRoutes = (app) => {
  // todoList Routes
  app.route('/store')
    .get(generalAPI.list_all_stores)
    .post(generalAPI.create_a_store);


  app.route('/store/:storeId')
    .get(generalAPI.read_a_store)
    .put(generalAPI.update_a_store)
    .delete(generalAPI.delete_a_store);
}
