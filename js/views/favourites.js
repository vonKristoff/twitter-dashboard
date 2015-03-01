define(['collections/fave-collection','views/tweets'], function (FaveCollection, TweetView){

  var appview = Backbone.View.extend({
    el:'.content',
    tagName:'ul',
    className:'tweets',
    initialize:function(){

      this.data = new FaveCollection();

      this.data.fetch().done(function(){

        // console.log(this.data);

        this.renderAll();
        
      }.bind(this))

    },
    renderAll: function (){

      this.data.each(this.render, this);
    },
    render: function (Model){

      // check var against this.name for persistance
      var singleTweet = new TweetView({
        model: Model
      })
      this.$el.empty().append(singleTweet.render().el);
    }

  })

  return appview

});