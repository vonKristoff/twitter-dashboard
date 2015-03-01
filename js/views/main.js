define(['backbone','views/single', 'jqueryui'], function (Backbone, SingleView, jqueryui){

	var View = Backbone.View.extend({
		tagName:'ul',
		className:'tweets',
		initialize: function (){
			
			// see http://jsfiddle.net/aJjW6/2/

			this.$el.sortable({
        placeholder: "sortable-placeholder",
        update: function(ev, ui){
        	console.log(ev, ui);
          // that.listUpdate();
        }
      });  

			this.renderAll();	
		},
		renderAll: function (){

			this.collection.each(this.render, this);
		},
		render: function (Model){
					
			var single = new SingleView({model:Model})

			this.$el.append( single.render().el )

			return this
		}
	})
	return View;
})