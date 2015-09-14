// off canvas menu //
var off_canvas = function (){
  $(".menu-btn, .off-canvas-mask").on("click", function(event){
    $("body").toggleClass("open-menu");
    event.preventDefault();
  });
};

off_canvas();

// tv-program show //
var TVprogram_show = function (){
  $(".tv-program, .close").on("click", function(event){
    $(".tv-program-bg, .tv-program-content").toggleClass("show");
    event.preventDefault();
  });
};

TVprogram_show();

// header-news search 關閉 //
if ($(window).width() < 960){
  $("#search-news").focus(function(){
    $(".ic-search-close").show();
  });

  $(".ic-search-close").on("click", function() {
    $(".ic-search-close").hide();
  });
}
// hero video select //
var video_select = function (){
  $(".slidee").find("li").each(function(){
    var li = $(this);
    li.on("click", function(event){
      li.addClass("is-active");
      li.siblings().removeClass("is-active");
      var this_program = li.attr("data-value");
      var program_list = $(".select[data-value="+ this_program +"]");
      program_list.addClass("is-active");
      program_list.siblings().removeClass("is-active");
      var video_list = $(".video-list[data-value="+ this_program +"]");
      video_list.addClass("is-active");
      video_list.siblings("ul").removeClass("is-active");
      event.preventDefault();
    })
  })
  $(".select").find("li").each(function(){
    var li = $(this);
    li.on("click", function(event){
      li.addClass("is-active");
      li.siblings().removeClass("is-active");
      var this_video = li.attr("data-value");
      var video = $(".video-list.is-active").find("li").filter("[data-value="+ this_video +"]");
      video.addClass("is-active");
      video.siblings().removeClass("is-active");
      event.preventDefault();
    })
  })
};

video_select();


// video select dropdown //
var select_dropdown = function (){
  $(".select").find("ul").on("click", ".init", function() {
    $(this).closest("ul").children('li:not(.init)').toggle();
  });

  $(".select").find("ul").on("click", function() {
      $(".select").find(".ic-drop-down").toggleClass("up");
  });

  var allOptions = $(".select").find("ul").children('li:not(.init)');
  $(".select").find("ul").on("click", "li:not(.init)", function() {
      allOptions.removeClass('selected');
      $(this).addClass('selected');
      $(".select").find("ul").children('.init').html($(this).html());
      allOptions.toggle();
  });
};

if ($(window).width() < 960){
  select_dropdown();
};

var select_resize = function (){
  var win = $(this);
  if (win.width() > 960 ) {
    $(".select.is-active").find("li:not(.init)").show();
  } else {
    select_dropdown();
  }
};

$( window ).resize(function() {
  select_resize();
});

// fitVids.js //
$(document).ready(function(){
  $(".video-list").fitVids();
  $(".article-video").fitVids();
});

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
    speed: 1000,
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
    speed: 1000,
    moveBy: 600,
    elasticBounds: 1,
    dragHandle: 1,
    dynamicHandle: 1,
    clickBar: 1,
  }).init();
};

// when > 960 remove sly //
var win_resize = function (){
  var win = $(this);
  if (win.width() > 960 ) {
    $('.frame').sly(false);
    $('.hero').find(".frame").sly(false);
  }
};

$( window ).resize(function() {
  win_resize();
});

// IE hide clock //
if (document.all && document.querySelector && !document.addEventListener) {
  $(".clock").hide();
  $(".ic-search-close").remove();
  $('.frame').sly(false);
  $('.hero').find(".frame").sly(false);
};

// 修正 IE8 無視 z-index //
$(document).ready(function (){
  $('iframe').each(function(){
    var url = $(this).attr("src");
    $(this).attr("src",url+"?wmode=transparent");
  });
});