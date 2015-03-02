define(['backbone'], function (Backbone){
  // extraordinary
	var Model = Backbone.Model.extend({
		defaults:{
			order: 0
		}
	})
	return Model;
})