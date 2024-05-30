function message() {
    var Mail = document.getElementById("email");
    var Contrasena = document.getElementById("contra");
    const error1 = document.getElementById("error1");
    const error2 = document.getElementById("error2");

    if(Mail.value === ''){
        error1.textContent = "Es necesario que llene este campo";
    }
    else{
        error1.textContent = "";
    }
    if(Contrasena.value === ''){
        error2.textContent = "Es necesario que llene este campo";
    }
    else{
        error2.textContent = "";
    }
}