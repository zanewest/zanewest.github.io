function DOMManip() {
    var heading = document.getElementById("body-content");
    var headingtext = document.createTextNode("Group 1's First Meeting");

    heading.style.fontSize = "25";
    heading.style.textAlign = "center";
    heading.appendChild(headingtext);

    var showVideoBtn = document.createElement("button");

    showVideoBtn.setAttribute("id", "showVideoBtn");
    showVideoBtn.setAttribute("type", "button");
    showVideoBtn.setAttribute("onclick", "showVideo()");

    showVideoBtn.style.display = "block";
    showVideoBtn.style.margin = "0 auto";
    showVideoBtn.style.justifyContent = "center";

    var buttonLabel = document.createTextNode("Show Video");
    showVideoBtn.appendChild(buttonLabel);
    heading.appendChild(showVideoBtn);

    var introduction = document.createElement("p");
    introduction.setAttribute("id", "body-content");

    var introText = document.createTextNode("Our first meeting established group rules and allowed us to begin coordinating our presentations.")
    introduction.style.fontSize = "17";

    introduction.appendChild(introText);
    heading.insertBefore(introduction, showVideoBtn);
}

function showVideo(){
    var bodyContent = document.getElementById("body-content");
    var video = document.createElement("iframe");

    video.setAttribute("src", "https://www.youtube.com/embed/il0Bkrb9gLY");
    video.setAttribute("width", "420");
    video.setAttribute("height", "315");
    video.setAttribute("id", "video");

    bodyContent.appendChild(video);
    document.body.appendChild(bodyContent);

    var showVideoBtn = document.getElementById("showVideoBtn")

    bodyContent.removeChild(showVideoBtn);

    //remove video
    var hideVideoBtn = document.createElement("button");

    hideVideoBtn.setAttribute("id", "hideVideoBtn");
    hideVideoBtn.setAttribute("type", "button");
    hideVideoBtn.setAttribute("onclick", "hideVideo()");

    hideVideoBtn.style.display = "block";
    hideVideoBtn.style.margin = "0 auto";
    hideVideoBtn.style.justifyContent = "center";

    var buttonLabel = document.createTextNode("Hide Video");
    hideVideoBtn.appendChild(buttonLabel);
    bodyContent.insertBefore(hideVideoBtn, video);

    //stylize video frame
    var styleVideoBtn = document.createElement("button");

    styleVideoBtn.setAttribute("id", "styleVideoBtn");
    styleVideoBtn.setAttribute("type", "button");
    styleVideoBtn.setAttribute("onclick", "styleVideo()");

    styleVideoBtn.style.display = "block";
    styleVideoBtn.style.margin = "0 auto";
    styleVideoBtn.style.justifyContent = "center";

    var buttonLabel = document.createTextNode("Stylize Video");
    styleVideoBtn.appendChild(buttonLabel);
    bodyContent.insertBefore(styleVideoBtn, video);

    //animate video frame
    var aniVideoBtn = document.createElement("button");

    aniVideoBtn.setAttribute("id", "aniVideoBtn");
    aniVideoBtn.setAttribute("type", "button");
    aniVideoBtn.setAttribute("onclick", "aniVideo()");

    aniVideoBtn.style.display = "block";
    aniVideoBtn.style.margin = "0 auto";
    aniVideoBtn.style.justifyContent = "center";

    var buttonLabel = document.createTextNode("Animate Video");
    aniVideoBtn.appendChild(buttonLabel);
    bodyContent.insertBefore(aniVideoBtn, video);

}

function aniVideo(){
    var video = document.getElementById("video");
    video.classList.toggle('aniVideo');
}

function styleVideo(){
    var video = document.getElementById("video");
    video.classList.toggle('videoStyle');
}

function hideVideo(){

    var video = document.getElementById("video");
    var bodyContent = document.getElementById("body-content");
    var hideVideoBtn = document.getElementById("hideVideoBtn");
    var showVideoBtn = document.getElementById("showVideoBtn");
    bodyContent.removeChild(video);

    bodyContent.removeChild(hideVideoBtn);

    var styleVideoBtn = document.getElementById("styleVideoBtn");

    bodyContent.removeChild(styleVideoBtn);

    var aniVideoBtn = document.getElementById("aniVideoBtn");

    bodyContent.removeChild(aniVideoBtn);

}

function drawFlag(){
    var c=document.getElementById("circle");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.arc(200,100,65,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();

    var flagBtn = document.getElementById("flagBtn");
    flagBtn.style.display= "none";
}