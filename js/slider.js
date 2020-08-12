$(document).ready(function(){
  $('.next').on('click', function(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
  });

  $('.prev').on('click', function(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
  });

  document.getElementById("img1").onclick = function() {
      window.location = "https://www.facebook.com/events/275977459985384/";
  }

  document.getElementById("img2").onclick = function() {
      window.location = "https://www.facebook.com/events/814426858891983/";
  }

  document.getElementById("img3").onclick = function() {
      window.location = "https://www.facebook.com/events/2459518827456696/";
  }

  document.getElementById("img4").onclick = function() {
      window.location = "https://www.facebook.com/events/1197416300383036/";
  }

  document.getElementById("img5").onclick = function() {
      window.location = "https://www.facebook.com/events/758615444490938/";
  }

  document.getElementById("img6").onclick = function() {
      window.location = "https://www.facebook.com/events/1910145552356660/";
  }

  document.getElementById("img7").onclick = function() {
      window.location = "https://www.facebook.com/events/1865968413457605/";
  }

  document.getElementById("img8").onclick = function() {
      window.location = "https://www.facebook.com/events/562339227557443/";
  }

  document.getElementById("img9").onclick = function() {
      window.location = "https://www.facebook.com/events/568015950299389/";
  }


  document.getElementById("img10").onclick = function() {
      window.location = "https://www.facebook.com/events/324421925012679/";
  }

  document.getElementById("img11").onclick = function() {
      window.location = "https://www.facebook.com/events/2116368748616941/";
  }

  document.getElementById("img12").onclick = function() {
      window.location = "https://www.facebook.com/events/2151205985206033/";
  }

  document.getElementById("img13").onclick = function() {
      window.location = "https://www.facebook.com/events/291318324925358/";
  }

  document.getElementById("img14").onclick = function() {
      window.location = "https://www.facebook.com/events/2239659076277785/";
  }

  document.getElementById("img15").onclick = function() {
      window.location = "https://www.facebook.com/events/246962429345825/";
  }

  document.getElementById("img16").onclick = function() {
      window.location = "https://www.facebook.com/events/1971377213190883/";
  }

  document.getElementById("img17").onclick = function() {
      window.location = "https://www.facebook.com/events/325470537942031/";
  }

  document.getElementById("img18").onclick = function() {
      window.location = "https://www.facebook.com/events/242094463000378/";
  }

  document.getElementById("img19").onclick = function() {
      window.location = "https://www.facebook.com/events/159308711535625/";
  }

  document.getElementById("img20").onclick = function() {
      window.location = "https://www.facebook.com/events/184577892314968/";
  }

  document.getElementById("img21").onclick = function() {
      window.location = "https://www.facebook.com/events/192068624717056/";
  }

  document.getElementById("img22").onclick = function() {
      window.location = "https://www.facebook.com/events/161739634471982/";
  }

  document.getElementById("img23").onclick = function() {
      window.location = "https://www.facebook.com/events/578780805799738/";
  }

  document.getElementById("img24").onclick = function() {
      window.location = "https://www.facebook.com/events/922255724608053/";
  }

  document.getElementById("img25").onclick = function() {
      window.location = "https://www.facebook.com/pg/qmbes/events/?ref=page_internal";
  }

});

//Upcoming

$(document).ready(function(){
  $('.Unext').on('click', function(){
    var currentImg = $('.Uactive');
    var nextImg = currentImg.next();

    if(nextImg.length){
      currentImg.removeClass('Uactive').css('z-index', -10);
      nextImg.addClass('Uactive').css('z-index', 10);
    }
  });

  $('.Uprev').on('click', function(){
    var currentImg = $('.Uactive');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('Uactive').css('z-index', -10);
      prevImg.addClass('Uactive').css('z-index', 10);
    }
  });

  document.getElementById("Uimg1").onclick = function() {
      window.location = "https://www.instagram.com/qmbes/";
  }

  document.getElementById("Uimg2").onclick = function() {
      window.location = "https://www.instagram.com/qmbes/";
  }

  document.getElementById("Uimg3").onclick = function() {
      window.location = "https://www.instagram.com/qmbes/";
  }

  document.getElementById("Uimg4").onclick = function() {
      window.location = "https://www.instagram.com/qmbes/";
  }

  document.getElementById("Uimg5").onclick = function() {
      window.location = "https://www.instagram.com/qmbes/";
  }

  document.getElementById("Uimg6").onclick = function() {
      window.location = "https://www.instagram.com/qmbes/";
  }

  document.getElementById("Uimg7").onclick = function() {
      window.location = "https://www.instagram.com/qmbes/";
  }

  document.getElementById("Uimg8").onclick = function() {
      window.location = "https://www.instagram.com/qmbes/";
  }

  document.getElementById("Uimg9").onclick = function() {
      window.location = "https://www.instagram.com/qmbes/";
  }

});
