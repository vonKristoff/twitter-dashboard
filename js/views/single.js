define(['backbone','text!templates/template.html','handlebars'], function (Backbone, tpl, Handlebars){

	var Info = Backbone.View.extend({
		tagName:'li',
		template: Handlebars.compile($(tpl).html()),
		initialize:function(){
			this.data = this.model.toJSON();			
		},
		render:function(){		// notice the render is being called elsewhere (in the collection view)

			this.$el.append( this.template(this.data) );
			return this
		}
	})
	return Info;
})