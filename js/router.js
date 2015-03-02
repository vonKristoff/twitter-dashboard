define(['backbone','views/dashboard', 'views/favourites', 'controller'],function (Backbone, Dashboard, Favourites, Controller){
	
	var Router = Backbone.Router.extend({

		routes:{
			''          : 'dashboard',
      'index.php' : 'dashboard', // capture callback from twitter auth
      'favourites': 'faves'
		},
		dashboard:function(){
      console.log('router:dashboard');
      // dashboard route relies on existance of handle data
      Controller.onConnection(function(){
        var content = new Dashboard();  
      })
      
		},
    faves: function (){
      console.log('router:favourites');
      var content = new Favourites();
    }
	})
	return Router

})