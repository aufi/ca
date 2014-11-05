window.ca_config = {
  company_name: 'ACME',
  currency: 'CZK',
  minimal_bid: 50
}

App = Ember.Application.create();

App.Router.map(function() {
  this.resource('auctions');
  this.resource('auction', { path: '/auction/:auction_id'});
  this.resource('auction_edit', { path: '/auction/:auction_id/edit'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.AuctionsRoute = Ember.Route.extend({
  model: function() {
    return auctions;
  }
});

App.AuctionRoute = Ember.Route.extend({
  model: function(params) {
    return auctions.findBy('id', params.auction_id)
  }
});

App.AuctionEditRoute = Ember.Route.extend({
  model: function(params) {
    return auctions.findBy('id', params.auction_id)
  }
});

Ember.Handlebars.helper('execute-js', function(input) {
  return eval(input);
});

var auctions = [{
    id: '1',
    name: 'Notebook HP 1234',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    deadline_at: new Date('2014-11-20'),
    price: 8000
  },{
    id: '2',
    name: 'Display Samsung 5678',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    deadline_at: new Date('2014-11-26'),
    price: 1200
  },{
    id: '3',
    name: 'Notebook Lenovo T61',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    deadline_at: new Date('2014-11-02'),
    price: 6000
  }];
