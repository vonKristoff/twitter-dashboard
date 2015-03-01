define(['backbone','text!templates/favourites.html','handlebars'], function (Backbone, favouritesTemplate, Handlebars){

	var tweet = Backbone.View.extend({
		tagName:'li',
		template: Handlebars.compile($(favouritesTemplate).html()),
		render:function(){	

			this.$el.append(this.template(this.model.toJSON()));
			return this
		}
	})
	return tweet;
})