// Selecciona el botón de iniciar sesión
document.getElementById("loginBtn").addEventListener("click", function() {
    // Obtiene el nombre de usuario y contraseña ingresados
    const nombreUsuario = document.getElementById("nombre").value; 
    const password = document.getElementById("password").value;
    
    // Aquí puedes agregar tu lógica de validación (ej. verificar en una base de datos)

    if (nombreUsuario && password) {
        // Si las credenciales son válidas, almacena el nombre de usuario en localStorage
        localStorage.setItem("nombreUsuario", nombreUsuario);
        
        // Redirigir al index.html
        window.location.href = "../index.html"; 
    } else {
        alert("Por favor, ingrese un usuario y contraseña válidos.");
    }
});

