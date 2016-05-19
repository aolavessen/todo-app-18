import Ember from 'ember';

export default Ember.Controller.extend ({
  saveList(attrs) {
    const listName = this.store.createRecord(`listName`, attrs);

    listName.save().then(() => {

    this.transitionToRoute(`app.index`)
    })
  }

})
