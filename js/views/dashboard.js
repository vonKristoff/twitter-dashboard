define(['backbone', 'text!templates/dashboard.html', 'controller', 'handlebars'], function (Backbone, dashboardTemplate, Controller, Handlebars){

  var appview = Backbone.View.extend({
    el:'.content',
    template: Handlebars.compile($(dashboardTemplate).html()),
    initialize:function(){
      Controller.status = 'dashboard';
      Controller.pageMarker();
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
    setInfluencePoll: function(){
      var results = Controller.pollInfluence();
      // set css scale
      $('.pie-left').css({
        'transform': 'scale('+results.followers+')'
      })
      $('.pie-right').css({
        'transform': 'scale('+results.following+')'
      })
    },
    render:function(){

      // console.log(Controller.user);
      // render as usual
      this.$el.empty().append(this.template(Controller.user));
      // get twitter profile pic
      this.attachImage();
      // set 'influence' results      
      this.setInfluencePoll();  
      
    }

  })

  return appview

});