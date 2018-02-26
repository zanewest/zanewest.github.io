var meetingContainer = document.getElementById("meeting-info"); //create a variable for our meeting info div

var groupContainer = document.getElementById("group-info");

var btn = document.getElementById("btn"); //create a variable for our button

var btn_group = document.getElementById("btn_group");

var meetingCounter = 0; // an index for which meeting we should output

var groupMembers = ["Zane West", "Eric Rybalkin", "Ralph Borcherds", "Rudy Ravelin", "Sophia Gannon", "Shaela LastName"];

btn.addEventListener("click", function () {  //an event listener is created for clicks on our button
    var AJAX = new XMLHttpRequest();  //Initializes an instance of XMLHttpRequest
    AJAX.open('GET', 'json/meetings.json'); //Loads data from an external JSON file.
    AJAX.onload = function () {	//This function is where we can manipulate the data
        //console.log(AJAX.responseText); //This will output the data to the console.
        var meetingData = JSON.parse(AJAX.responseText); // This stores our requested data in JSON format.
        renderHTML(meetingData); //Call a function designed for adding HTML to our page
    };
    AJAX.send(); //This performs the commands
});

function renderHTML(data) { //Specialized function for adding HTML content,
    var htmlString = ""; //This is our placeholder for content to add

    if (meetingCounter <= 2) { //Our JSON bounds exceed after 3 loops
        htmlString += "<p>" + data[meetingCounter].name + " is at " + data[meetingCounter].time
            + ". The first presentation is by " + data[meetingCounter].presentation.author[0]
            + " on " + data[meetingCounter].presentation.topic[0] + ".</p>" //Formatting
    }

    if (meetingCounter == 2) {
        btn.classList.add("hide"); //remove button
    }

    meetingContainer.insertAdjacentHTML('beforeend', htmlString); //This adds the HTML content
    meetingCounter++; //Increment our meeting index.

}

//Loop the array of group members and write each to the HTML
btn_group.addEventListener("click", function(){
    for (var i = 0; i < groupMembers.length; i++){
        groupContainer.insertAdjacentHTML('beforeend', groupMembers[i] + "<br>");
    }
    btn_group.classList.add("hide");
});