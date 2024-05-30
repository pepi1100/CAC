function message() {
    var Nombre = document.getElementById("nombre");
    var Apellido = document.getElementById("apellido");
    var Mail = document.getElementById("email");
    var Contrasena = document.getElementById("contraseña");
    var Fecha = document.getElementById("f_nacimiento");
    var Terminos = document.getElementById("TyC")
    const error1 = document.getElementById("error1");
    const error2 = document.getElementById("error2");
    const error3 = document.getElementById("error3");
    const error4 = document.getElementById("error4");
    const error5 = document.getElementById("error5");
    const error6 = document.getElementById("error6");

    if(Nombre.value === ''){
        error3.textContent = "Es necesario que llene este campo";
    }
    else{
        error3.textContent = "";
    }
    if(Apellido.value === ''){
        error4.textContent = "Es necesario que llene este campo";
    }
    else{
        error4.textContent = "";
    }
    if(Fecha.value === ''){
        error5.textContent = "Es necesario que llene este campo";
    }
    else{
        error5.textContent = "";
    }
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
    /*if(Terminos.value === 1){
        error6.textContent = "Es necesario que acepte los términos y condiciones";
    }
    else{
        error6.textContent = "";
    }*/




    
}