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

  var $frame_hero = $('.hero').find(".frame"); window.frr = $frame_hero;
  var sly = new Sly($frame_hero, {
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

// fitVids.js //
$(document).ready(function(){
  $(".video").fitVids();
});

// video selet //
if ($(window).width() < 960){
  $(".select").find("ul").on("click", ".init", function() {
      $(this).closest("ul").children('li:not(.init)').toggle();
  });

  var allOptions = $(".select").find("ul").children('li:not(.init)');
  $(".select").find("ul").on("click", "li:not(.init)", function() {
      allOptions.removeClass('selected');
      $(this).addClass('selected');
      $(".select").find("ul").children('.init').html($(this).html());
      allOptions.toggle();
  });
}