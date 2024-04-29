$(document).ready(function () {
   $("#metanavigation").hide();
   $("#searchnavigation").hide();
   $("#mainnavigation").show();

   $(".navbar-toggler").click(function () {
      $(this).toggleClass("collapsed");
      $("#overlaynavigation").toggle();
      $("#mainnavigation").toggle();
      $("#searchnavigation").toggle();
   });
});
