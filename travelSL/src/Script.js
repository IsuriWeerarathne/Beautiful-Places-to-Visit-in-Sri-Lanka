function validateForm() {
    var x = document.forms["feedback"]["comment"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    x=document.forms["feedback"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }
}