define(['backbone', 'text!templates/body.html', 'controller', 'handlebars'], function (Backbone, bodyTemplate, Controller, Handlebars){

  // main content view (navigation / footer etc)

  var body = Backbone.View.extend({
    el: 'body',
    template: Handlebars.compile($(bodyTemplate).html()),
    initialize: function (){
      // get server info
      Controller.getHandleData(function(){
        this.render()
      }.bind(this))
    },
    events:{
      'click .btn-dashboard':'navigate',
      'click .btn-favourites':'navigate'
    },
    navigate: function (e){
      e.preventDefault();
      var tgt = $(e.currentTarget).data('link');

      Backbone.history.navigate(tgt, {trigger: true})
    },
    render: function (){
      
      this.$el.append(this.template(Controller.user));
      // grab a random image for the background
      Controller.randomBG(this.$el);

      return this
    }
  })

  return body

})