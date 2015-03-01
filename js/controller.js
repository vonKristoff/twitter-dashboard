define(['backbone'], function (Backbone){

  var Controller = {
    status:'booting',
    user: {},
    connected: false,
    dimensions:{ w:0, h:0, ratio:0 },
    getDimensions: function(){
      var dm = Controller.dimensions;
      dm.w = $(window).width();
      dm.h = $(window).height();
      // assuming desktop, and window is portrait
      dm.ratio = dm.w / dm.h;
    
      switch(Controller.status){
        case 'dashboard':
          console.log(Controller.dimensions);
        break;
        default:
        // null
        break;
      }
      
    },
    getHandleData: function (next){
      
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
    onConnection: function (next){

      var renderOnLoad = setInterval(function(){
        if(Controller.connected){
          clearInterval(renderOnLoad);
          next();
        } 
      },100)
    },
    randomBG: function($tgt){
      var r1 = Math.random()*7,
          r2 = Math.random()*7,
          r3 = Math.random()*7,
          rand = (~~r1).toString() + (~~r2).toString() + (~~r3).toString();
        
      $tgt.css({
        'background-image':'url(http://www.random-art.org/img/large/7'+rand+'7.jpg)'
      });
    }
  };

  return Controller

})