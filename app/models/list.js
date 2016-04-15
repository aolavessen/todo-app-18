import Model from 'ember-data/model';

export default Model.extend({
  name: attr(),
  items: attr(),
  id: attr(),

});
