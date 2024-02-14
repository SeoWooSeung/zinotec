$(function () {
  $("#main").fullpage({
    scrollOverflow: false,
    anchors: ["01", "02", "03", "04", "05"],
    navigation: true,
    onLeave: function (index, nextIndex, direction) {
      console.log(index, nextIndex, direction);
      //   $(".gnb li").removeClass("on");
      //   $(".gnb li")
      //     .eq(nextIndex - 1)
      //     .addClass("on");

      $(".section").removeClass("on");
      $(".section")
        .eq(nextIndex - 1)
        .addClass("on");
    },
  });

  $(".main_visual_slide").slick({
    arrows: true,
    autoplay: true,
    pauseOnHover: false,
    dots: false,
    speed: 1500,
    autoplaySpeed: 4000,
    fade: true,
    prevArrow: $(".arrow_box .left"),
    nextArrow: $(".arrow_box .right"),
  });

  $(".main_visual_slide").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".main_visual_slide .itm").removeClass("on");
      $(".main_visual_slide .itm").eq(currentSlide).addClass("on");
    }
  );
});
