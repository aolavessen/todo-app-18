import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: `http://my-todo-list-api.herokuapp.com`,
});
