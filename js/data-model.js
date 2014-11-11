App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Auction = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('integer'),
  deadline_at: DS.attr('date'),
  bids: DS.hasMany('bids', {async: true})
});

App.Bid = DS.Model.extend({
  username: DS.attr('string'),
  price: DS.attr('integer'),
  created_at: DS.attr('date'),
  auction: DS.belongsTo('auction')
});

App.Auction.FIXTURES = [{
    id: 1,
    name: 'Notebook HP 1234',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    deadline_at: new Date('2014-11-20'),
    price: 8000,
    bids: [1, 2]
  },{
    id: 2,
    name: 'Display Samsung 5678',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    deadline_at: new Date('2014-11-26'),
    price: 1200
  },{
    id: 3,
    name: 'Notebook Lenovo T61',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    deadline_at: new Date('2014-11-02'),
    price: 6000,
    bids: [3]
  }];


App.Bid.FIXTURES = [{
  id: 1,
  username: 'AuM',
  price: 7000,
  auction: 1
},{
  id: 2,
  username: 'LaJ',
  price: 8000,
  auction: 1
},{
  id: 3,
  username: 'ZaM',
  price: 6000,
  auction: 3
}];