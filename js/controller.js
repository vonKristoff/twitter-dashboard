define(['backbone','text!handle.json', 'jqueryui'], function (Backbone, Handle, jqueryui){

  var Controller = {
    
    user: {},
    connected: false,
    getHandleData: function (next){
      // grab the user data to populate dashboard
      $.ajax({
        url:'server/handle.php',
        method:'GET',
        success: function (res){

          Controller.user = JSON.parse(res).pop();
          Controller.connected = true;
          next();
        }
      })
    },
    // waiting for data to be loaded so that view can render
    onConnection: function (next){

      var renderOnLoad = setInterval(function(){
        if(Controller.connected){
          clearInterval(renderOnLoad);
          next();
        } 
      },100)
    },
    // keep a visual mark on which page we are at 
    pageMarker: function (tgt){
      // remove any instance existing
      $('.nav>.btn.active').removeClass('active');
      // set page class
      $('.btn-'+tgt).addClass('active')
    },
    // dashboard data viz functionallity
    pollInfluence:function(){
      var followers = Controller.user.followers_count,
          following = Controller.user.friends_count,
          base = 0;
      // which is biggest to make a base scale from
      base = (following > followers)? 1/following : 1/followers;

      // cannot let the css scale be lower than 0.5 - clamp it
      function clamp(num){
        var min = 0.5,
            margin = min + ((num * base) * min);
        return margin
      }

      return {
        followers: clamp(followers),
        following: clamp(following)
      }

    },
    // switching out data attrs for real contexts and enabling the string URLS as actual links
    tweetFilter: function (){
  
      function urlify(text) {
        var urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, '<a href="$1" target="_blank">$1</a>')
      }

      $('.tweets li').each(function (i){

        var p = $(this).find('.profile');
        // get img src
        var src = p.data('src');
        // set bg
        p.css({
          'background-image': 'url('+src+')'
        })

        var body = $(this).find('.text'),
            text = body.text(),
            linked = urlify(text);

        body.html(linked);

      })  
    },
    // allow dragging and resorting of favourites
    sortingBehaviour:function(){

      $('.tweets').sortable({
        placeholder: 'placeholder',
        update: function(ev, ui){
          
          var fromIndex = $(ui.item).find('.tweet--container').data('order');

          // ok ran out of time to actually update the model 'order' attribute
          // the point would be to store this model (local storage or server) - so that you can favouritise your faves
          // and that each reload to site would remember that order history
        }
      }); 

    },
    // Yey - grab some random bad digital art from some random dudes website
    randomBG: function($tgt){
      var r1 = Math.random()*7,
          r2 = Math.random()*7,
          r3 = Math.random()*7,
          rand = (~~r1).toString() + (~~r2).toString() + (~~r3).toString();
      // gotcha - insert into  
      $tgt.css({
        'background-image':'url(http://www.random-art.org/img/large/7'+rand+'7.jpg)'
      });
    }
  };

  return Controller

})