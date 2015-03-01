<?php 
// Twitter App Credentials 
require "secret.php";
require "twitteroauth/autoloader.php";

use Abraham\TwitterOAuth\TwitterOAuth;

session_start();

$token = $_SESSION['access_token']["oauth_token"];
$secret = $_SESSION['access_token']["oauth_token_secret"];

$connection = new TwitterOAuth($CONSUMER_KEY, $CONSUMER_SECRET, $token, $secret);

$handle = $_SESSION['access_token']['screen_name'];

$user = $connection->get("users/lookup", array("screen_name" => $handle));

  // store faves in session for ajax to obtain once app has booted
  //$_SESSION['results'] = $favorites;


// $results = $_SESSION['results'];

$response = array('handle' => $handle, 'favorites' => $favorites);

echo json_encode($user);

?>