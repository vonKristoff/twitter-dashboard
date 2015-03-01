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

        // console.log(this.data);

        // console.log(this.data.toJSON());

        // this.clonedCollection = this.data.clone();
        // this.data.each(function(Model, i){
        //   Model.set({order: i});
        // })

        this.renderAll();
        
      }.bind(this))

    },
    renderAll: function (){
      this.$el.empty().html('<ul class="tweets"></ul>');
      this.data.each(this.render, this);
    },
    render: function (Model){

      var singleTweet = new TweetView({
        model: Model
      })

      this.$el.find('.tweets').append(singleTweet.render().el);
      // this.$el.append(singleTweet.render().el);
    }

  })

  return appview

});