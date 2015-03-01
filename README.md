#Twitter-Dashboard

SPA that lets you connect to a Twitter dashboard, view some stats, and access your favourite tweets with the ability to reorder them.

I will be using `PHP` to perform the authentication dance to the `Twitter API`. From authentication, `Backbone` will take over to deliver the app.

##Local deployment

My simple recipe to access the app on localhost is to run `MAMP` on `port:8888`. Create a Twitter app, and grab the `app token` and `auth token` ids. Edit the `secret.php` file and place your Twitter app credentials there. The Auth redirect points to the following callback URL: `http://localhost:8888/JCNICOLAS/index.php`