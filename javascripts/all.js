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

// hero video select //
var video_select = function (){
  $("li.program-item").each(function(){
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
      $(".select").find("ul").children('.init').html("請選擇影片");
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

// video list select init //
var select_init = function (){
  $(".select").find("ul").on("click", "li:not(.init)", function() {
    $(".select").find("ul").children('.init').html($(this).html());
    event.preventDefault();
  });
};

// video list select open toggle //
$(".select").on('click', function () {
  $(this).toggleClass('is-open');
  event.preventDefault();
});

// hero iframe lazy load //

var iframes = $('iframe.lazy');

$(".video-topic-item").each(function(){
  var item = $(this);
  item.on("click", function(event){
    var this_video = item.attr("data-value");
    var video_show = $(".video-item[data-value="+ this_video +"]");
    $(video_show).find("iframe").attr('src', function() {
      return $(this).data('src');
    });
    event.preventDefault();
  })
})

$(".program-item").each(function(){
  var item = $(this);
  item.on("click", function(event){
    var this_video = item.attr("data-value");
    var video_show = $(".video-list[data-value="+ this_video +"]");
    $(video_show).find("iframe").attr('src', function() {
      return $(this).data('src');
    });
    event.preventDefault();
  })
})

iframes.attr('data-src', function() {
  var src = $(this).attr('src');
  $(this).removeAttr('src');
  return src;
});

// add sly //
var add_sly = function (){
  var $frame = $('#header-news');
  var $slidee = $frame.children('ul').eq(0);
  window.frr = $frame;
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
    scrollBar: null,
    size: 20,
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
  }).init();
};

// remove sly //
var remove_sly = function (){
  $('.frame').sly(false);
  $('.hero').find(".frame").sly(false);
};

// mobile init sly && select_init //
if ($(window).width() < 1024){
  add_sly();
  select_init();
};

// resize sly && select_init //
var sly_select_init_resize = function (){
  var win = $(this);
  if (win.width() > 1024 ) {
    remove_sly();
    select_init(false);
  } else {
    remove_sly();
    add_sly();
    select_init();
  }
};

// IE hide clock && sly, select resize && < select dropdwn //
if (document.all && document.querySelector && !document.addEventListener) {
  remove_sly();
} else {
  $( window ).resize(function() {
    sly_select_init_resize();
  });
};

// 修正 IE8, IE11 18XXX以下版本 無視 z-index //
if(navigator.userAgent.indexOf('Trident') != -1){
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
};