function setup() {
        if (localStorage.getItem('cryptoSearch') !== null) {
            var cryptoSearch = JSON.parse(localStorage.getItem('cryptoSearch'));
            document.getElementById('userSym').value= cryptoSearch;
            userCall();
        }

    var userSym = JSON.parse(localStorage.getItem('cryptoSearch'));

    document.getElementById("userSym").innerHTML = userSym;

    var cryptoData;
    var AJAX = new XMLHttpRequest();  //Initializes an instance of XMLHttpRequest
    AJAX.open('GET', 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,LTC,EOS,ADA,XLM,NEO,IOT&tsyms=USD'); //Loads data from an external JSON file.
    AJAX.onload = function () {	//This function is where we can manipulate the data
        //console.log(AJAX.responseText); //This will output the data to the console.
        cryptoData = JSON.parse(AJAX.responseText); // This stores our requested data in JSON format.
        console.log(cryptoData);
        populateData(cryptoData);
    };



    AJAX.send(); //This performs the commands

    //set colors for pos and neg values
    //get an array of all day change values
    var dayChngValues = document.getElementsByClassName("24-hours-change");

    //index the array
    for (var i = 0; i < 11; i++) {
//if the value is pos, make it green
        if (dayChngValues[i].innerHTML > 0){
            dayChngValues[i].style.color = 'green';
        } else{
            dayChngValues[i].style.color = 'red';
        }
    }

}


//Handles user requested crypto data
function userCall(){
    var userCryptoData;

    var api = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=';
    var sym = document.getElementById('userSym').value;
    sym = sym.toUpperCase();
    var curr = '&tsyms=USD';

    var url = api + sym + curr;

    console.log(sym);



    var AJAX = new XMLHttpRequest();  //Initializes an instance of XMLHttpRequest
    AJAX.open('GET', url); //Loads data from an external JSON file.
    AJAX.onload = function () {	//This function is where we can manipulate the data
        //console.log(AJAX.responseText); //This will output the data to the console.
        userCryptoData = JSON.parse(AJAX.responseText); // This stores our requested data in JSON format.
        console.log(userCryptoData);

        if(userCryptoData.Response != "Error"){

            userPrice.innerHTML = "$" + userCryptoData["RAW"][sym]["USD"]["PRICE"].toFixed(2);

            userMktCap.innerHTML = "$" + userCryptoData["RAW"][sym]["USD"]["MKTCAP"].toLocaleString(undefined, {maximumFractionDigits: 0});

            userDayChng.innerHTML = userCryptoData["RAW"][sym]["USD"]["CHANGEPCT24HOUR"].toFixed(2) + "%";
            userCCName.innerHTML = sym;


            var userSym = document.getElementById('userSymDiv');
            userSym.style.visibility = "visible";
            userSym.style.opacity = "1";
            userSym.style.height = "80px";

        }
        else{
            console.log("Failed API Call, invalid crypto symbol")

            var userSym = document.getElementById("userSym");
            userSym.classList.toggle("wiggle");
        }


    };

    //set the user selected cryptocurrent name


    AJAX.send(); //This performs the commands


    //local storage
    var userSymVal = document.getElementById("userSym").value;

    localStorage.setItem('cryptoSearch', JSON.stringify(userSymVal));
}

function userClear(){
    var userSym = document.getElementById('userSymDiv');
    userSym.style.visibility = "hidden";
    userSym.style.opacity = "0";
    userSym.style.height = "0px";
    document.getElementById('userSym').value= '';
    window.localStorage.clear();

}







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






function populateData(cryptoData) {

    //  ______ _____ _____ 
    //  | ___ \_   _/  __ \
    //  | |_/ / | | | /  \/
    //  | ___ \ | | | |    
    //  | |_/ / | | | \__/\
    //  \____/  \_/  \____/

    //set btc price
    var btcPriceVal = cryptoData["RAW"]["BTC"]["USD"]["PRICE"];

    //formatting
    btcPriceVal = btcPriceVal.toFixed(2);

    //display btc price
    btcPrice.innerHTML = "$" + btcPriceVal;

    //set btc market cap
    var btcMktCapVal = cryptoData["RAW"]["BTC"]["USD"]["MKTCAP"];

    //formatting
    btcMktCapVal = btcMktCapVal.toLocaleString(undefined, {maximumFractionDigits: 0})

    //display btc market cap
    btcMktCap.innerHTML = "$" + btcMktCapVal;

    //set 24hr change
    var btcDayChngVal = cryptoData["RAW"]["BTC"]["USD"]["CHANGEPCT24HOUR"];
    btcDayChng.innerHTML = btcDayChngVal.toFixed(2) + "%";


    //   _____ _____ _   _
    //  |  ___|_   _| | | |
    //  | |__   | | | |_| |
    //  |  __|  | | |  _  |
    //  | |___  | | | | | |
    //  \____/  \_/ \_| |_/

    //set eth price
    var ethPriceVal = cryptoData["RAW"]["ETH"]["USD"]["PRICE"];

    //formatting
    ethPriceVal = ethPriceVal.toFixed(2);

    //display eth price
    ethPrice.innerHTML = "$" + ethPriceVal;

    //set ETH market cap
    var ethMktCapVal = cryptoData["RAW"]["ETH"]["USD"]["MKTCAP"];

    //formats market cap value into human readable form
    ethMktCapVal = ethMktCapVal.toLocaleString(undefined, {maximumFractionDigits: 0})

    //display eth market cap
    ethMktCap.innerHTML = "$" + ethMktCapVal;

    //set ETH 24hr change
    var ethDayChngVal = cryptoData["RAW"]["ETH"]["USD"]["CHANGEPCT24HOUR"];
    ethDayChng.innerHTML = ethDayChngVal.toFixed(2) + "%";


//  ____  _______________________
//  \   \/  /\______   \______   \
//   \     /  |       _/|     ___/
//   /     \  |    |   \|    |
//  /___/\  \ |____|_  /|____|
//        \_/        \/

    //set xrp price
    var xrpPriceVal = cryptoData["RAW"]["XRP"]["USD"]["PRICE"];

    //formatting
    xrpPriceVal = xrpPriceVal.toFixed(2);

    //display xrp price
    xrpPrice.innerHTML = "$" + xrpPriceVal;

    //set xrp market cap
    var xrpMktCapVal = cryptoData["RAW"]["XRP"]["USD"]["MKTCAP"];


    //formats market cap value into human readable form
    xrpMktCapVal = xrpMktCapVal.toLocaleString(undefined, {maximumFractionDigits: 0});

    //display xrp market cap
    xrpMktCap.innerHTML = "$" + xrpMktCapVal;

    //set xrp 24hr change
    var xrpDayChngVal = cryptoData["RAW"]["XRP"]["USD"]["CHANGEPCT24HOUR"];

    console.log(xrpDayChngVal);

    xrpDayChng.innerHTML = xrpDayChngVal.toFixed(2) + "%";


    //  ______  _____  _   _
    //  | ___ \/  __ \| | | |
    //  | |_/ /| /  \/| |_| |
    //  | ___ \| |    |  _  |
    //  | |_/ /| \__/\| | | |
    //  \____/  \____/\_| |_/

    //set bch price
    var bchPriceVal = cryptoData["RAW"]["BCH"]["USD"]["PRICE"];

    //formatting
    bchPriceVal = bchPriceVal.toFixed(2);

    //display bch price
    bchPrice.innerHTML = "$" + bchPriceVal;

    //set bch market cap
    var bchMktCapVal = cryptoData["RAW"]["BCH"]["USD"]["MKTCAP"];

    //formats market cap value into human readable form
    bchMktCapVal = bchMktCapVal.toLocaleString(undefined, {maximumFractionDigits: 0})

    //display bch market cap
    bchMktCap.innerHTML = "$" + bchMktCapVal;

    //set bch 24hr change
    var bchDayChngVal = cryptoData["RAW"]["BCH"]["USD"]["CHANGEPCTDAY"];
    bchDayChng.innerHTML = bchDayChngVal.toFixed(2) + "%";


    //   _    _____ _____
    //  | |  |_   _/  __ \
    //  | |    | | | /  \/
    //  | |    | | | |
    //  | |____| | | \__/\
    //  \_____/\_/  \____/

    //set ltc price
        var ltcPriceVal = cryptoData["RAW"]["LTC"]["USD"]["PRICE"];

    //formatting
        ltcPriceVal = ltcPriceVal.toFixed(2);

    //display ltc price
        ltcPrice.innerHTML = "$" + ltcPriceVal;

    //set ltc market cap
        var ltcMktCapVal = cryptoData["RAW"]["LTC"]["USD"]["MKTCAP"];

    //formats market cap value into human readable form
        ltcMktCapVal = ltcMktCapVal.toLocaleString(undefined, {maximumFractionDigits:0})

    //display ltc market cap
        ltcMktCap.innerHTML = "$" + ltcMktCapVal;

    //set ltc 24hr change
        var ltcDayChngVal = cryptoData["RAW"]["LTC"]["USD"]["CHANGEPCTDAY"];
        ltcDayChng.innerHTML = ltcDayChngVal.toFixed(2) + "%";



//   _____ _____ _____
//  |  ___|  _  /  ___|
//  | |__ | | | \ `--.
//  |  __|| | | |`--. \
//  | |___\ \_/ /\__/ /
//  \____/ \___/\____/

    //set eos price
        var eosPriceVal = cryptoData["RAW"]["EOS"]["USD"]["PRICE"];

    //formatting
        eosPriceVal = eosPriceVal.toFixed(2);

    //display eos price
        eosPrice.innerHTML = "$" + eosPriceVal;

    //set eos market cap
        var eosMktCapVal = cryptoData["RAW"]["EOS"]["USD"]["MKTCAP"];

    //formats market cap value into human readable form
        eosMktCapVal = eosMktCapVal.toLocaleString(undefined, {maximumFractionDigits:0})

    //display eos market cap
        eosMktCap.innerHTML = "$" + eosMktCapVal;

    //set eos 24hr change
        var eosDayChngVal = cryptoData["RAW"]["EOS"]["USD"]["CHANGEPCTDAY"];
        eosDayChng.innerHTML = eosDayChngVal.toFixed(2) + "%";


    //    ___ ______  ___
    //   / _ \|  _  \/ _ \
    //  / /_\ \ | | / /_\ \
    //  |  _  | | | |  _  |
    //  | | | | |/ /| | | |
    //  \_| |_/___/ \_| |_/

   //set ada price
       var adaPriceVal = cryptoData["RAW"]["ADA"]["USD"]["PRICE"];

   //formatting
       adaPriceVal = adaPriceVal.toFixed(2);

   //display ada price
       adaPrice.innerHTML = "$" + adaPriceVal;

   //set ada market cap
       var adaMktCapVal = cryptoData["RAW"]["ADA"]["USD"]["MKTCAP"];

   //formats market cap value into human readable form
       adaMktCapVal = adaMktCapVal.toLocaleString(undefined, {maximumFractionDigits:0})

   //display ada market cap
       adaMktCap.innerHTML = "$" + adaMktCapVal;

   //set ada 24hr change
       var adaDayChngVal = cryptoData["RAW"]["ADA"]["USD"]["CHANGEPCTDAY"];
       adaDayChng.innerHTML = adaDayChngVal.toFixed(2) + "%";



//  __   __ _     ___  ___
//  \ \ / /| |    |  \/  |
//   \ V / | |    | .  . |
//   /   \ | |    | |\/| |
//  / /^\ \| |____| |  | |
//  \/   \/\_____/\_|  |_/

   //set xlm price
       var xlmPriceVal = cryptoData["RAW"]["XLM"]["USD"]["PRICE"];

   //formatting
       xlmPriceVal = xlmPriceVal.toFixed(2);

   //display xlm price
       xlmPrice.innerHTML = "$" + xlmPriceVal;

   //set xlm market cap
       var xlmMktCapVal = cryptoData["RAW"]["XLM"]["USD"]["MKTCAP"];

   //formats market cap value into human readable form
       xlmMktCapVal = xlmMktCapVal.toLocaleString(undefined, {maximumFractionDigits:0})

   //display xlm market cap
    xlmMktCap.innerHTML = "$" + xlmMktCapVal;

   //set xlm 24hr change
       var xlmDayChngVal = cryptoData["RAW"]["XLM"]["USD"]["CHANGEPCTDAY"];
    xlmDayChng.innerHTML = xlmDayChngVal.toFixed(2) + "%";




//   _   _  _____ _____
//  | \ | ||  ___|  _  |
//  |  \| || |__ | | | |
//  | . ` ||  __|| | | |
//  | |\  || |___\ \_/ /
//  \_| \_/\____/ \___/

   //set neo price
       var neoPriceVal = cryptoData["RAW"]["NEO"]["USD"]["PRICE"];

   //formatting
       neoPriceVal = neoPriceVal.toFixed(2);

   //display neo price
    neoPrice.innerHTML = "$" + neoPriceVal;

   //set neo market cap
       var neoMktCapVal = cryptoData["RAW"]["NEO"]["USD"]["MKTCAP"];

   //formats market cap value into human readable form
       neoMktCapVal = neoMktCapVal.toLocaleString(undefined, {maximumFractionDigits:0})

   //display neo market cap
       neoMktCap.innerHTML = "$" + neoMktCapVal;

   //set neo 24hr change
       var neoDayChngVal = cryptoData["RAW"]["NEO"]["USD"]["CHANGEPCTDAY"];
    neoDayChng.innerHTML = neoDayChngVal.toFixed(2) + "%";



//   _____ _____ _____
//  |_   _|  _  |_   _|
//    | | | | | | | |
//    | | | | | | | |
//   _| |_\ \_/ / | |
//   \___/ \___/  \_/

   //set iot price
       var iotPriceVal = cryptoData["RAW"]["IOT"]["USD"]["PRICE"];

   //formatting
       iotPriceVal = iotPriceVal.toFixed(2);

   //display iot price
    iotPrice.innerHTML = "$" + iotPriceVal;

   //set iot market cap
       var iotMktCapVal = cryptoData["RAW"]["IOT"]["USD"]["MKTCAP"];

   //formats market cap value into human readable form
       iotMktCapVal = iotMktCapVal.toLocaleString(undefined, {maximumFractionDigits:0})

   //display iot market cap
    iotMktCap.innerHTML = "$" + iotMktCapVal;

   //set iot 24hr change
       var iotDayChngVal = cryptoData["RAW"]["IOT"]["USD"]["CHANGEPCTDAY"];
    iotDayChng.innerHTML = iotDayChngVal.toFixed(2) + "%";

}


