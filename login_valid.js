function validate(){
    document.getElementById("error").style.boxShadow = "none";
        document.getElementById("error").style.border = "";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").visibility = "hidden";
        document.getElementById("error").innerHTML = "";
    
    var email = document.forms["logincreds"]["floatingInput"].value;
    var password = document.forms["logincreds"]["floatingPassword"].value;
    email = email.trim();
    password = password.trim();
    let patternemail = /^[a-zA-Z][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // match the email with the pattern
    if (!patternemail.test(email)) {
        // make the border red
        document.getElementById("error").style.boxShadow = "0 0 5px red";
        document.getElementById("error").style.border = "2px solid red";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").visibility = "visible";
        document.getElementById("error").innerHTML = "Improper Email Format";
        
        return false;
    }
    if(email.indexOf("vitstudent.ac.in") == -1){
        document.getElementById("error").style.boxShadow = "0 0 5px red";
        document.getElementById("error").style.border = "2px solid red";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").visibility = "visible";
        document.getElementById("error").innerHTML = "Only VIT email id allowed";
        
        return false;
    }
    // check if the password is empty
    if (password == "") {
        document.getElementById("error").style.boxShadow = "0 0 5px red";
        document.getElementById("error").style.border = "2px solid red";
        document.getElementById("error").style.color = "red";
        document.getElementById("error").visibility = "visible";
        document.getElementById("error").innerHTML = "Password cannot be empty";
        
        return false;
    }
    return true;


}