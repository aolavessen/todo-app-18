import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-years-resolutions');
  this.route('groceries');
  this.route('homework');
});

export default Router;
