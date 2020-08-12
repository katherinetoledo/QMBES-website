
class Member{
    constructor(name, position, linkedIn, img, mail){
        this.name = name;
        this.position = position;
        this.linkedIn = linkedIn;
        this.img = img;
        this.mail = mail;
    }
}

//create team member array
var team = [
        new Member("Toby", "Digital Executive", "https://www.linkedin.com/in/tobywynne-mellor", "img/team/2.jpg","tobytogs@hotmail.com"),
        new Member("Lorenzo", "Vice President", "https://www.linkedin.com/in/lorenzo-sani", "img/team/3.jpg", ""),
        new Member("Ed", "Chairman", "https://www.linkedin.com/in/lorenzo-sani", "img/team/1.jpg",""),
        new Member("Poppy", "Legend", "https://www.linkedin.com/in/lorenzo-sani", "img/team/1.jpg","emails")
    ];


//position on page to put 'team' section
var insertBox = document.getElementById('teamBox');

updateHTML();


function updateHTML(){
    //group members into rows of 3 - or if only 1 or 2 remaining rows of 1 and 2 respectively
    var group = [];

    for (var i = 0; i < team.length; i++) {
        if(group.length < 3){
            group.push(team[i]);
        }else{
            insertBox.innerHTML += makeRow(group); 
            group.length = 0;
            group.push(team[i]);
        }
    }

    if(group.length != 0){
        insertBox.innerHTML += makeRow(group);
    }
}


//make row creates the html rows
function makeRow(mem){

    
    var colSetting = "";

    switch(mem.length){
        case 3:
            colSetting = "col-sm-4";
            break;
        case 2:
            colSetting = "col-sm-6";
            break;
        case 1:
            colSetting = "col-sm-12";
            break;
    }

    var html = '<div class="row">';     
    
    for (var i = 0; i < mem.length; i++) {
        html += '<div class="'+ colSetting +'"><div class="team-member"><img class="mx-auto rounded-circle" src="' + mem[i].img + '" alt="">';
        html += '<h4>' + mem[i].name + '</h4>';
        html += '<p class="text-muted">'+ mem[i].position +'</p>';
        html += '<ul class="list-inline social-buttons">';
        
        if (mem[i].linkedIn != "") {
          html += '<li class="list-inline-item"><a href="' + mem[i].linkedIn + '"><i class="fa fa-linkedin"></i></a></li>';
        }

        if(mem[i].mail != ""){
            html += '<li class="list-inline-item"><a href="mailto:' + mem[i].mail + '" target="_top"><i class="fa fa-envelope"></i></a></li>';
            
        }

        html += '</ul></div></div>';
        
    }
    
    html+= '</div>';

    return html;
}



