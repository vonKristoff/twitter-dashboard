define(['backbone','models/model'], function (Backbone, Model){

	var ModelCollection = Backbone.Collection.extend({
		model: Model,
		url:'/twitter-dashboard/custom.json'//'tweets.php'
	})
	return ModelCollection;
})