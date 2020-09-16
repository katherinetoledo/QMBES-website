$('.carousel-control-prev').click(function() {
  $('#carouselCompetitions').carousel('prev');
});

$('.carousel-control-right').click(function() {
  $('#carouselCompetitions').carousel('next');
});

$(function(){
  $('#carouselCompetitions').carousel();
});