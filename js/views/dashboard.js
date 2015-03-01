define(['backbone'], function (Backbone){

  var appview = Backbone.View.extend({
    el:'.content',
    clonedCollection:{},
    initialize:function(){

      // this.data = new Collection();

      // this.data.fetch().done(function(){

      //   // console.log(this.data);

      //   this.clonedCollection = this.data.clone();


      //   // var tempModels = this.data.filter(function (Model) {
      //   //   console.log(Model);
      //   //   // return Model.get('hex');
      //   // }

      //   // var tempCollection = new Backbone.Collection(tempModels);


      //   // console.log(tempModels);


      //   this.clonedCollection.each(function(Model, i){
      //     Model.set({order: i});
      //   })

      //   // this.data.each(function (Model) {
      //   //  // console.log(Model,this);
      //   //   this.clonedCollection.add(new Backbone.Model(Model.toJSON()));
      //   // },this)

      //   console.log(this.clonedCollection);

        this.render();
        
      // }.bind(this))

    },
    render:function(){

      // this.view_main = new View({
      //   collection: this.data
      // })
      this.$el.empty();//append( this.view_main.$el );
    }

  })

  return appview

});