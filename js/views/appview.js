define(['backbone'], function (Backbone){

  var appview = Backbone.View.extend({
    el: 'body',
    initialize: function (){
      console.log(Backbone);
    },
    render: function (){

    }
  })
  return appview

})