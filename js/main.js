require(['config'], function(){

  require(['backbone', 'app', 'router'], function (Backbone, App, Router) {

    window.Broadcast = _.extend({},Backbone.Events);

    // if server has authorised - boot the app
    // forcing auth to true in the console will not sidestep the server router
    // any attempt will result in a redirect to signin

    if(window.auth) {

      window.App = new App(); 

      App.router = new Router();
      Backbone.history.start(); // { pushState: true }        
    
    }
      
  })
})  