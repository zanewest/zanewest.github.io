function crossGuitars(){
    console.log("cross guitars");
    var elecGuit = document.getElementById("elecGuit");
    elecGuit.classList.toggle("crossElecGuit");

    var acouGuit = document.getElementById("acouGuit");
    acouGuit.classList.toggle("crossAcouGuit");
}

function loadedConfirm(){
    alert("The page has loaded.");
}

function closeForm(){
    var form = document.getElementById("preorderForm");
    var div = document.getElementById("closeDiv");
    var thanksMsg = document.getElementById("thanksMsg");


    //checks for form validation
    var fname = document.forms["preorderForm"]["fname"].value;
    var lname = document.forms["preorderForm"]["lname"].value;
    var email = document.forms["preorderForm"]["email"].value;

    var fname = document.getElementById("firstName");
    var lname = document.getElementById("lastName");
    var email = document.getElementById("email");

    if (fname == "") {
        form.classList.toggle("wiggle");

        email.style.background = 'white';
        lname.style.background = 'white';
        fname.style.background = '#FF7C76';

        return false;
    } else if (lname == "") {
        form.classList.toggle("wiggle");

        email.style.background = 'white';
        fname.style.background = 'white';
        lname.style.background = '#FF7C76';
    } else if (email == "") {
        form.classList.toggle("wiggle");

        lname.style.background = 'white';
        fname.style.background = 'white';
        email.style.background = '#FF7C76';
    }
    else {
        form.style.display = "none";
        div.style.height = "0";

        var thanksText = document.createTextNode("Your order has been submitted");
        div.style.textAlign = "center";
        div.appendChild(thanksText);
    }
}