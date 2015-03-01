require(['config'], function(){

  require(['backbone', 'router', 'views/body'], function (Backbone, Router, Body) {

    window.Broadcast = _.extend({},Backbone.Events);

    // if server has authorised - boot the app
    // forcing auth to true in the console will not sidestep the server router
    // any attempt will result in a redirect to signin

    if(window.auth) {

      window.App = new Body(); 

      App.router = new Router();
      Backbone.history.start({
        root: '/twitter-dashboard/',
        pushState: true
      });
    
    }
      
  })
})  