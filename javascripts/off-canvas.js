var off_canvas = function (){

  $(".toggle-menu").on("click", function(event){
    $("body").toggleClass("open-menu");
    event.preventDefault;
  });

  // $(".outside a, .off-canvas-mask").on("click", function(){
  //   $("body").removeClass("open-menu");
  // });
};

off_canvas();
