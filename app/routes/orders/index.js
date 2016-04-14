import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addToItemQuantity(lineItem, amount) {
      lineItem.incrementProperty('quantity', amount);
    },

    createOrder(order) {
      this.get('store').saveOrder(order);
      this.transitionTo('orders.order', order);
    }
  },

  model() { return this.get('store').newOrder(); }
});
