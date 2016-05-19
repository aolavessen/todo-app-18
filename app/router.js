import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new', {path: '/new-list'});
  this.route('new');
  this.route('lists', function() {
    this.route('new');
  });
  this.route('application', function() {});
  this.route('list');
});


export default Router;
