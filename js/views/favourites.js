define(['collections/fave-collection','views/tweets', 'controller'], function (FaveCollection, TweetView, Controller){

  var appview = Backbone.View.extend({
    el:'.content',
    tagName:'ul',
    className:'tweets',
    initialize:function(){
      Controller.status = 'favourites';
      Controller.pageMarker();
      this.data = new FaveCollection();

      this.data.fetch().done(function(){

        // console.log(this.data.toJSON());

        // this.clonedCollection = this.data.clone();
        // this.data.each(function(Model, i){
        //   Model.set({order: i});
        // })

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