$.ajax({
  type: "POST",
  url: "php/events.php",
  dataType: 'JSON',
  success: function (response) {
    
    var sorted = sortByDate(response);
    var upcomingCount = 0;
    for (var i = 0; i < sorted.length; i++) {
      var event = sorted[i];

      if(new Date(event.dateNTime) > new Date())
      {
       if(upcomingCount < 1) {
        $('#message').remove();
       }
        $('#upcoming').prepend(makeCard(new Event(event.name,
          event.imgURL,
          event.dateNTime,
          event.fbLink,
          event.elementId)
        ));
        upcomingCount++;
      } else {
        $('#past').append(makeCard(new Event(event.name,
          event.imgURL,
          event.dateNTime,
          event.fbLink,
          event.elementId)
        ));
      }
    }

    //Destroy
    $('#upcoming').flickity('destroy');
    //Re-init
    $('#upcoming').flickity({
      // options
      cellAlign: 'left',
      contain: true
    });

    //Destroy
    $('#past').flickity('destroy');
    //Re-init
    $('#past').flickity({
      // options
      cellAlign: 'left',
      contain: true
    });
  }
})




