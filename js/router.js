define(['backbone','views/dashboard', 'views/favourites', 'controller'],function (Backbone, Dashboard, Favourites, Controller){
	
	var Router = Backbone.Router.extend({

		routes:{
			''          : 'dashboard',
      'index.php' : 'dashboard',
      'favourites': 'faves'
		},
		dashboard:function(){
      // render the relevant view here
      console.log('router:dashboard');
      // dashboard route relies on existance of handle data
      Controller.onConnection(function(){
        var content = new Dashboard();  
      })
      
		},
    faves: function (){
      // render the relevant view here
      console.log('router:favourites');
      var content = new Favourites();
    }
	})
	return Router

})