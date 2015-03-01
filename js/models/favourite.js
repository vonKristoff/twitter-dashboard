define(['backbone'], function (Backbone){

	var Model = Backbone.Model.extend({
		defaults:{
			order: 0
		}
	})
	return Model;
})