window.ca_config = {
  company_name: 'ACME',
  currency: 'CZK',
  minimal_bid: 50
}

App = Ember.Application.create();

App.Router.map(function() {

  this.resource('auction', { path: '/auction/:auction_id'});
  this.resource('auction_edit', { path: '/auction/:auction_id/edit'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('auction');
  }
});

App.AuctionRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('auction', params.auction_id)
  }
});

App.AuctionEditRoute = Ember.Route.extend({
  model: function(params) {
    return auctions.findBy('id', params.auction_id)
  }
});

Ember.Handlebars.helper('get-config', function(input) {
  console.log(input);
  return eval('window.ca_config.' + input);
});

App.ApplicationView = Ember.View.extend({
  currentPathDidChange: function() {
    Ember.run.next( this, function() {
      var slider_state = 0;
      this.$("ul.nav li:has(>a.active)").addClass('active');
      this.$("ul.nav li:not(:has(>a.active))").removeClass('active');
    });
  }.observes('controller.currentPath')
});

