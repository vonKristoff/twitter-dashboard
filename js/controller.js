define(['backbone','text!handle.json'], function (Backbone, Handle){

  var Controller = {
    status:'booting',
    user: {},
    connected: false,
    dimensions:{ w:0, h:0, ratio:0 },
    getHandleData: function (next){
      

      Controller.user = JSON.parse(Handle)

      Controller.connected = true;
      next();


      // going local 
      // $.ajax({
      //   url:'server/handle.php',
      //   method:'GET',
      //   success: function (res){

      //     console.log(res);

      //     Controller.user = JSON.parse(res).pop();

      //     Controller.connected = true;
      //     next();
      //   }
      // })
    },
    onConnection: function (next){

      var renderOnLoad = setInterval(function(){
        if(Controller.connected){
          clearInterval(renderOnLoad);
          next();
        } 
      },100)
    },
    getDimensions: function(){
      var dm = Controller.dimensions;
      dm.w = $(window).width();
      dm.h = $(window).height();
      // assuming desktop, and window is portrait
      dm.ratio = dm.w / dm.h;
    
      // call appropriate listener
      if(Controller.status != 'booting'){
        Controller.onresize[Controller.status].handle();  
      }
    },
    pageMarker: function(){
      // remove any instance existing
      $('.nav>.btn.active').removeClass('active');
      // set page class
      $('.btn-'+Controller.status).addClass('active')
    },
    resize: {
      dashboard:{
        handle:function(){}
      },
      favourites:{
        handle:function(){}
      }
    },
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