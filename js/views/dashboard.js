define(['backbone', 'text!templates/dashboard.html', 'controller', 'handlebars'], function (Backbone, dashboardTemplate, Controller, Handlebars){

  var appview = Backbone.View.extend({
    el:'.content',
    template: Handlebars.compile($(dashboardTemplate).html()),
    initialize:function(){
      Controller.status = 'dashboard';
      this.render();
    },
    attachImage: function(template){
      var db = $('.avatar'),
          src = db.data('bg'),
          hack = src.replace('normal', '400x400');

      db.css({
        'background-image':'url('+hack+')'
      })

    },
    render:function(){

      console.log(Controller.user);

      this.$el.empty().append(this.template(Controller.user));

      this.attachImage()
        
    }

  })

  return appview

});