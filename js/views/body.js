define(['backbone', 'text!templates/body.html', 'controller', 'handlebars'], function (Backbone, bodyTemplate, Controller, Handlebars){


  var body = Backbone.View.extend({
    el: 'body',
    className:'wrapper',
    template: Handlebars.compile($(bodyTemplate).html()),
    initialize: function (){

      // fetch basic data here

      this.render();
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
      this.$el.append(this.template({name:'JCN'}));
      return this
    }
  })

  return body

})