#Twitter-Dashboard

SPA that lets you connect to a Twitter dashboard, view some stats, and access your favourite tweets with the ability to reorder them.

I will be using `PHP` to perform the authentication dance to the `Twitter API`. From authentication, `Backbone` will take over to deliver the app.

###Features
* Two routes - dashboard & favourites
* twitter profile strength ratio :: followers vs following
* reordable favourites (keep as bookmarks)
* random background graphic - so please refresh the page!

Very basically, the app connects to twitter, pulls back user info, and their favourite tweets, and renders a couple of views based on that. There's no db persistance.


##Local deployment

My simple recipe to access the app on localhost is to run `MAMP` on `port:8888`. Create a Twitter app, and grab the `app token` and `auth token` ids. Edit the `secret.php` file and place your Twitter app credentials there. The Auth redirect points to the following callback URL: `http://localhost:8888/twitter-dashbboard/index.php` <- so make sure you match it.

* `git clone` repo into MAMP's `htdocs`
* `bower install` the components
* Create your own Twitter developer app (note down credentials)
* `server/secret.php` - add your twitter app credentials

===

####Failures

With just a lack of time, I didn't create an instance of local storage to hold copies of the user's info & favourite data, where the reordering would have been saved to.

Without the use of CSS preprocessing, I have just scratched out the relevant css by hand, and havent covered all prefixes to be a all over browser compliant layout. Webkit will work just fine - as it always does.

I am a bit rusty with backbone, and so I may have gone off piste from BB best practices, but overall I think the method is solid.

Tests. Usually I have at least JS/CSS linting when using a build tool. But, sorry folks no tests. 

---

####Structure

I have used `require js` to organise my files, with the use of `Handlebars` templates. (I am aware that the app isnt using a compressed and concatinated r.js flavour).

I believe the code is organised well, and by following the BB method, the code should be readable, especially with the brief comments.

`main.js` boots the app and heads up the super view `views/body.js`.
This loads in `views/dashboard.js`, and will switch out to `views/favourites.js`, dependant on page navigation, served by the `router.js`.
