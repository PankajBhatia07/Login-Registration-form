function myfunction() {
    var x = document.getElementById("Pass");

    if (x.type === "password") {
        x.type = "text";
    } else {
        (x.type = "password");
    }
}



function validate() {
    var password = document.getElementById("Pass");
    var length = document.getElementById("length");

    if (password.value.length >= 8) {
        alert("Login Succesfull");
        window.location.replace("index1.html")
        return false;
    } else {
        alert("Login Failed")
    }

}