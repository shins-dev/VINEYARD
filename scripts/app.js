$(document).ready(function () {
  $(".features-shopping").hover(function () {
    $(this)
      .closest(".features-item")
      .find(".features-img")
      .toggleClass("hovered");
  });

  $(".product-shopping").hover(function () {
    $(this)
      .closest(".product-content-item")
      .find(".product-img")
      .toggleClass("hovered");
  });
  // show setting
  var activeSettingVisible = false;
  $(".icofont-gear-alt").click(function (event) {
    event.stopPropagation();
    activeSettingVisible = !activeSettingVisible;
    if (activeSettingVisible) {
      $(".active-setting").addClass("is-show");
    } else {
      $(".active-setting").removeClass("is-show");
    }
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".active-setting").length) {
      $(".active-setting").removeClass("is-show");
      activeSettingVisible = false;
    }
  });
  // login - reseter 
  //thêm active
  $(".fa-user").click(function(event) {
    event.stopPropagation();
    $(".login").toggleClass("active");
  });
  // xóa active
  $(".fa-x").click(function() {
    $(".login , .register").removeClass("active");
  });
  $(".register-show").click(function() {
    $(".login").removeClass("active");
    $(".register").addClass("active");
  });
  $(".login-show").click(function() {
    $(".register").removeClass("active");
    $(".login").addClass("active");
  });
   // Ngăn chặn sự kiện cuộn chuột
   $(".login , .register").on("wheel", function(event) {
    event.preventDefault();
  });
  
});

// slider

$(".dateofweek-list").slick({
  dots: true,
  dotsClass: "slick-dots",
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});