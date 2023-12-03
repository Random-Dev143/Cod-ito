document.getElementById("login.html").addEventListener("DOMContentLoaded", function(event) {
    event.preventDefault();
  
    // Obtiene los valores de usuario y contraseña
    var username = document.getElementById("staticEmail").value;
    var password = document.getElementById("inputPassword").value;
  
    // Validación de usuario y contraseña (luego re-direcciona o da mensaje de error)
    if (username === "admin" && password === "admin") {
      window.location.href = "FACU, LA PAGINA PARA REDIRECCIONAR VA ACA";
    } else {
      alert("Usuario o contraseña inválido, volver a ingresar correctamente");
    }
  });
  