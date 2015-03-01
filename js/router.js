define(['backbone'],function(Backbone){
	
	var Router = Backbone.Router.extend({

		routes:{
			'': 'dashboard',
      '/stats': 'stats',
      '/favourites': 'faves'
		},
		dashboard:function(){
      // render the relevant view here
		},
    stats: function (){
      // render the relevant view here
    },
    faves: function (){
      // render the relevant view here
    }
	})
	return Router

})