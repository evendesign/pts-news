var off_canvas = function (){
  $(".menu-btn, .off-canvas-mask").on("click", function(event){
    $("body").toggleClass("open-menu");
    event.preventDefault();
  });
};

off_canvas();