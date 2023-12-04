document.addEventListener("DOMContentLoaded", function(event) {

document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
  
   
    var username = document.getElementById("email").value;
    var password = document.getElementById("inputPassword").value;
  
    
    if ((username === "admin" && password === "admin") ||
        (username === "Facundo.rua90@gmail.com" && password === "123") ||
        (username === "martin.reinoso99@gmail.com" && password === "0000")) {
        window.location.href = "https://cod-ito-crud.netlify.app/";
}   else {
        alert("Usuario o contraseña inválidos, vuelve a ingresar correctamente");
}
  });
});