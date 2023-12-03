document.addEventListener("DOMContentLoaded", function(event) {
    event.preventDefault();
  
    // Obtiene los valores de usuario y contraseña
    var username = document.getElementById("staticEmail").value;
    var password = document.getElementById("inputPassword").value;
  
    // Validación de usuario y contraseña (luego re-direcciona o da mensaje de error)
    if ((username === "admin" && password === "admin") ||
        (username === "Facundo.rua90@gmail.com" && password === "123") ||
        (username === "martin.reinoso99@gmail.com" && password === "0000")) {
        window.location.href = "PAGINA_CORRECTA";
}   else {
        alert("Usuario o contraseña inválidos, vuelve a ingresar correctamente");
}
  });
  