import Model from 'ember-data/model';

export default Model.extend({
  id: attr(),
  description: attr(),
  isComplete: attr(),

});
