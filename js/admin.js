main();


function main(){
	getEvents();
	getCommittee();
}


function getEvents(){
	$.getJSON("php/events.php", function(data){
		for (var i = 0; i < data.length; i++) {
			var json = JSON.parse(data[i]);
			var html = "";
			html = "<option value="+i+">"+json.name+"</option>";
			$('#featuredEventSelect').append(html);
		}
	});
}

function getCommittee(){
	$.getJSON("php/committee.php", function(data){
		for (var i = 0; i < data.length; i++) {
			var json = JSON.parse(data[i]);
			var html = "<tr><td>"+json.name+"</td><td>"+json.position+"</td><td>"+truncate(json.linkedIn)+"</td><td>"+json.mail+"</td><td>"+truncate(json.img)+"</td></tr>";
			$('#committeeTable').append(html);
		}
	});
}

function truncate(text){
	if(text != null && text.length > 50){
		var length = 50;
		var trimmedPathname = text.substring(0, length);
		return trimmedPathname + "...";
	}
	return text;
}