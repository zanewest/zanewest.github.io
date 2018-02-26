function wait(){}

function forLoopCount(){
var tempText ="";
var text = "";
for (i = 0; i < 10; i++){
text += i + " ";
}
    document.getElementById("countLoop").innerHTML = text;
}

function conditionalEval() {
if (document.getElementById('number').value == "4"){
    document.getElementById("dispPosResult").innerHTML = "Correct";
    document.getElementById("dispNegResult").innerHTML = "";
    } else{
    document.getElementById("dispNegResult").innerHTML = "Incorrect";
    document.getElementById("dispPosResult").innerHTML = "";
}
}

function addNameToArray() {
    var friendNames = [];
    friendNames += document.getElementById('name').value + " ";
document.getElementById('name').value = '';
    document.getElementById("dispFriends").innerHTML += friendNames;
}

function retrieveVal() {
    var assocArray = [];
    var key;
    assocArray["food"] = "Bacon";
    assocArray["drink"] = "Water";
    key = document.getElementById('key').value;
    document.getElementById("dispVal").innerHTML = assocArray[key];
    document.getElementById('key').value = '';
}