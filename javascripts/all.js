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

if ($(window).width() <= 960){
  select_dropdown();
};

var select_resize = function (){
  var win = $(this);
  if (win.width() <= 960 ) {
    select_dropdown();
  } else if ((win.width() > 960 )) {
    $(".select").find("ul").children('li:not(.init)').show();
  }
};

$(window).resize(function() {
  select_resize();
});

// add sly //
var add_sly = function (){
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

if ($(window).width() < 960){
  add_sly();
};

// remove sly //
var remove_sly = function (){
  $('.frame').sly(false);
  $('.hero').find(".frame").sly(false);
};

// resize sly //
var sly_resize = function (){
  var win = $(this);
  if (win.width() > 960 ) {
    remove_sly();
  } else {
    remove_sly();
    add_sly();
  }
};

$( window ).resize(function() {
  sly_resize();
});

// IE hide clock //
if (document.all && document.querySelector && !document.addEventListener) {
  $(".clock").hide();
  $(".ic-search-close").remove();
  remove_sly();
};

// 修正 IE8 無視 z-index //
$(function(){
  $("iframe").each(function(){
    var ifr_source = $(this).attr('src');
    var wmode = "wmode=opaque";
    if(ifr_source.indexOf('?') != -1) {
        var getQString = ifr_source.split('?');
        var oldString = getQString[1];
        var newString = getQString[0];
        $(this).attr('src',newString+'?'+wmode+'&'+oldString);
    }
    else $(this).attr('src',ifr_source+'?'+wmode);
  });
});