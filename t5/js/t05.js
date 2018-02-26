function saveOrder () {
    //Get variables from form
    var name = document.getElementById("name").value;
    var phoneNum = document.getElementById("phoneNum").value;
    var email = document.getElementById("email").value;
    var orderNum = document.getElementById("orderNum").value;
    var orderTotal = document.getElementById("orderTotal").value;
    //set an object equal to form values
    var userOrder = {name: name, phoneNum: phoneNum, email: email, orderNum: orderNum, orderTotal: orderTotal};
    //store object
    localStorage.setItem('order', JSON.stringify(userOrder));
    //display confirmation
    document.getElementById("userOutput").innerHTML = "Thanks for your order";
}

function getOrderInfo() {
    var order = JSON.parse(localStorage.getItem('order'));

    document.getElementById("userOutput").innerHTML = "<b>Name:</b> " + order.name +
        "<br><b>Phone #:</b> " + order.phoneNum + "<br><b>Email:</b> " + order.email +
        "<br><b>Order #:</b> " + order.orderNum + "<br><b>Order Total:</b> " + order.orderTotal;
}

function clearItems () {
    window.localStorage.clear();
    location.reload();
}