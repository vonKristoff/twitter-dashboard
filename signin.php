<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1.0">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <title>Twitter Bookmarks</title>
  <link type="text/css" href="css/style.css" rel="stylesheet" media="all" />
</head>
<body>
<div class="wrapper">
  <div class="header">
    <div class="menu handle">

<?php

require 'server/twitteroauth/autoloader.php';
use Abraham\TwitterOAuth\TwitterOAuth;

session_start();

require 'server/secret.php';

// The TwitterOAuth instance
$connection = new TwitterOAuth($CONSUMER_KEY, $CONSUMER_SECRET);
// Requesting authentication tokens, the parameter is the URL we will be redirected to
$request_token = $connection->oauth('oauth/request_token', array('oauth_callback'=>'http://localhost:8888/twitter-dashboard/index.php')); 
// Saving them into the session
$_SESSION['oauth_token'] = $request_token['oauth_token'];
$_SESSION['oauth_token_secret'] = $request_token['oauth_token_secret'];
 
$url = $connection->url('oauth/authorize', array('oauth_token' => $request_token['oauth_token']));

echo '<a class="connect" href="'.$url.'">Connect</a>';

echo '</div>
      </div>
      </div>
      </body>
      </html>';
?>