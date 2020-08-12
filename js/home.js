$.ajax({
	type: "POST",
	url: "php/events.php",
	dataType: 'JSON',
	success: function (response) {
	  
		var sorted = sortByDate(response);

		sorted.forEach(event => {
			if(new Date(event.dateNTime) > new Date()){
				$('#upcoming').append(makeCard(new Event(event.name,
					event.imgURL,
					event.dateNTime,
					event.fbLink,
					event.elementId)
				));
			}
		});

		uploadPastEvents(sorted, 3);

	  //Destroy
	  $('#upcoming').flickity('destroy');
	  //Re-init
	  $('#upcoming').flickity({
		// options
		cellAlign: 'left',
		contain: true
	  });
	}
  });

$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	//stats animate in
	if (scroll > $('#stats').offset().top - ($(window).height() / 1.2)) {
		$('.stat').each(function (i) {
			setTimeout(function () {
				$('.stat').eq(i).addClass('is-showing2');
			}, 200 * (i + 1));
		})
	}

});


function uploadPastEvents(events, num){
	var count = 0;
	for (let i = 0; i < events.length; i++) {
		var event = events[i];
		if(new Date(event.dateNTime) < new Date() && count <= num)
		{
			$('#upcoming').append(makeCard(new Event(event.name,
				event.imgURL,
				event.dateNTime,
				event.fbLink,
				event.elementId)
			));
			count++
		}
	}
}