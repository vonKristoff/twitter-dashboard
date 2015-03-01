define(['backbone','models/favourite'], function (Backbone, Model){

	var favesCollection = Backbone.Collection.extend({
		model: Model,
		// url:'/twitter-dashboard/js/handle.json'//'server/tweets.php'
    url:'server/tweets.php'
	})
	return favesCollection;
})