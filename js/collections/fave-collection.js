define(['backbone','models/favourite'], function (Backbone, Model){

	var favesCollection = Backbone.Collection.extend({
		model: Model,
		// url:'/twitter-dashboard/js/handle.json'// offline mode
    url:'server/tweets.php'
	})
	return favesCollection;
})