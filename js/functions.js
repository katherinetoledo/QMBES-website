class Event {
    constructor(name, imgURL, dateNTime, fbLink, elementId) {
        this.name = name;
        this.imgURL = imgURL;
        this.dateNTime = dateNTime;
        this.fbLink = fbLink;
        this.elementId = elementId;
    }
}

function makeCard(event) {

    // Set the date we're counting down to
    var countDownDate = new Date(event.dateNTime).getTime();

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the countdown date
    var distance = countDownDate - now;
    var lastPhrase = "until the event!";

    if (distance < 0) {
        lastPhrase = "ago";
        opacity = 0.5;
    }

    // Time calculations for days, hours, minutes and seconds
    var days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
    var hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));

    var html;

    html = '<div class="eventCard">';
    html += '<img class="eventCard-img-top" src="' + event.imgURL + '" alt="Card image">';
    html += '<div class="eventCard-body"><h5 class="eventCard-title">' + event.name + '</h5>';
    html += '<p class="eventCard-date">' + event.dateNTime + '</p>';
    html += '<a href="' + event.fbLink + '" class="btn btn-primary" target="">Register</a></div>';
    if (days < 2) {
        html += '<div class="eventCard-footer"> ' + days + ' days '+ hours + ' hours ' + lastPhrase + '</div>';
    }
    else if (days < 1) {
        html += '<div class="eventCard-footer"> ' + hours + ' hours ' + minutes + ' minutes ' + lastPhrase + '</div>';
    } else {
        html += '<div class="eventCard-footer">' + days + ' days ' + lastPhrase + '</div>';
    }

    return html;

}



function copyToClipboard(text, el) {
    var copyTest = document.queryCommandSupported('copy');
    var elOriginalText = el.attr('data-original-title');

    if (copyTest === true) {
        var copyTextArea = document.createElement("textarea");
        copyTextArea.value = text;
        document.body.appendChild(copyTextArea);
        copyTextArea.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'Copied!' : 'Whoops, not copied!';
            el.attr('data-original-title', msg).tooltip('show');
        } catch (err) {
            console.log('Oops, unable to copy');
        }
        document.body.removeChild(copyTextArea);
        el.attr('data-original-title', elOriginalText);
    } else {
        // Fallback if browser doesn't support .execCommand('copy')
        window.prompt("Copy to clipboard: Ctrl+C or Command+C, Enter", text);
    }

}

$('.js-copy').click(function () {
    var text = $(this).attr('data-copy');
    var el = $(this);
    copyToClipboard(text, el);
});

function truncateString(str, num) {
    if (str.length > num)
        return str.slice(0, num > 3 ? num - 3 : num) + '...';
    return str;
}

function sortByDate(json) {

    for (var j = 0; j < json.length; j++) {
        json[j] = JSON.parse(json[j]);
    }

    json.sort(function (a, b) {
        return Math.abs(Date.now() - new Date(a.dateNTime)) - Math.abs(Date.now() - new Date(b.dateNTime));
    });
    return json;
}
