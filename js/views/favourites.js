define(['collections/fave-collection','views/tweets', 'controller'], function (FaveCollection, TweetView, Controller){

  var appview = Backbone.View.extend({
    el:'.content',
    tagName:'ul',
    className:'tweets',
    initialize:function(){

      Controller.pageMarker('favourites');

      if(Controller.faves){
        console.log('already have data');

        this.data = Controller.faves;
        this.data.comparator = 'order';
        this.renderAll();
        // order by order

      } else {
        console.log('fetching data');
        
        this.data = new FaveCollection();
        Controller.faves = _.extend({}, this.data);

        this.data.fetch().done(function(){

          // set an order reference
          this.data.each(function(Model, i){
            Model.set({order: i});
          })
          this.renderAll();
        
        }.bind(this))
      }
    },
    renderAll: function (){
      this.$el.empty().html('<ul class="tweets"></ul>');
      this.data.each(this.render, this);
    },
    render: function (Model){

      var singleTweet = new TweetView({ model: Model }),
          lag = Model.get('order');

      setTimeout(function(){
        this.$el.find('.tweets').append(singleTweet.render().el);
      
        Controller.tweetFilter();
        Controller.sortingBehaviour();
      
      }.bind(this), (100 * lag));
    }
  })

  return appview

});