import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from  'woodland/models/order';
import Product from  'woodland/models/product';

const products = [
  Product.create({title: 'Tent', price: 10, desciption: 'This is a tent'}),
  Product.create({title: 'Sleeping Bag', price: 5, desciption: 'This is a sleeping bag'}),
  Product.create({title: 'Flashlight', price: 2, desciption: 'This is a Flashlight'}),
  Product.create({title: 'First-Aid Kit', price: 3, desciption: 'This is a first aid kit'})
];

const orders = [
  Order.create({ id: '1234', name: 'Blaise Blobfish',
    items: [
      LineItem.create({product: products[0], quantity: 1}),
      LineItem.create({product: products[1], quantity: 1}),
      LineItem.create({product: products[2], quantity: 0}),
      LineItem.create({product: products[3], quantity: 0}),
    ]
  }),
];

export default Ember.Service.extend({
  getOrderById(id) { return orders.findBy('id', id); },

  getOrders() {
    return [
      { id: '1', name: 'Nate' },
      { id: '2', name: 'Greg' }
    ];
  },

  getProducts() { return products; }
});
