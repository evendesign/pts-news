// off canvas menu //
var off_canvas = function (){
  $(".menu-btn, .off-canvas-mask").on("click", function(event){
    $("body").toggleClass("open-menu");
    event.preventDefault();
  });
};

off_canvas();

// sly.js //
if ($(window).width() < 960){
  var $frame = $('.frame'); window.frr = $frame;
  var sly = new Sly($frame, {
    horizontal: 1,
    itemNav: 'centered',
    activateMiddle: 1,
    smart: 1,
    activateOn: 'mouseenter',
    mouseDragging: 1,
    touchDragging: 1,
    releaseSwing: 1,
    startAt: 1,
    speed: 200,
    moveBy: 600,
    elasticBounds: 1,
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
  }).init();
}