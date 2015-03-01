define(['backbone','views/dashboard', 'views/favourites'],function (Backbone, Dashboard, Favourites){
	
	var Router = Backbone.Router.extend({

		routes:{
			'': 'dashboard',
      'favourites': 'faves'
		},
		dashboard:function(){
      // render the relevant view here
      console.log('router:dashboard');
      var content = new Dashboard();
		},
    faves: function (){
      // render the relevant view here
      console.log('router:favourites');
      var content = new Favourites();
    }
	})
	return Router

})