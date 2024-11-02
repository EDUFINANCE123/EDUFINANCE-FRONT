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
 //confirmar las contraseñas que sean iguales
 document.getElementById('formRegistro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    const contrasena = document.getElementById('contrasena').value;
    const confirContrasena = document.getElementById('confirContrasena').value;

    if (contrasena === confirContrasena) {
        alert('Las contraseñas coinciden.');
        // Aquí puedes agregar el código para registrar el usuario
        // Por ejemplo, guardar los datos en localStorage
        const nombreUsuario = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        const usuario = {
            nombreUsuario,
            email,
            contrasena
        };

        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert('Usuario registrado con éxito.');
        window.location.href = '../index.html'; // Redirigir a la página principal
    } else {
        alert('Las contraseñas no coinciden.');
        // No permitir el ingreso y debe volver a ingresar las contraseñas
        document.getElementById('contrasena').value = '';
        document.getElementById('confirContrasena').value = '';
        return; // Salir de la función para evitar el envío del formulario
    }
});
// Manejo del inicio de sesión
document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    const email = document.getElementById('loginEmail').value;
    const contrasena = document.getElementById('loginContrasena').value;

    // Aquí puedes agregar la lógica para validar el inicio de sesión
    const usuarioGuardado = localStorage.getItem('nombreUsuario'); // Ejemplo de cómo obtener el usuario
    if (usuarioGuardado) {
        alert(`Bienvenido, ${usuarioGuardado}!`);
        // Redirigir a la página principal o hacer lo que necesites
        window.location.href = '../index.html'; // Ajusta la redirección según necesites
    } else {
        alert('Credenciales incorrectas.');
    }
});

// Manejo del registro
document.getElementById('formRegistro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const contrasena = document.getElementById('contrasena').value;

    // Aquí podrías añadir lógica para guardar el usuario en el localStorage
    localStorage.setItem('nombreUsuario', nombre); // Guarda el nombre en localStorage como ejemplo
    alert('Usuario registrado con éxito. Ahora puedes iniciar sesión.');
    // Opcional: puedes limpiar el formulario después de registrar
    document.getElementById('formRegistro').reset();
});

// Manejo de la visualización del formulario de inicio de sesión y registro
document.getElementById('mostrarLogin').addEventListener('click', function() {
    document.getElementById('formRegistro').style.display = 'none'; // Ocultar el formulario de registro
    document.getElementById('formLogin').style.display = 'block'; // Mostrar el formulario de inicio de sesión
});

// Si deseas ocultar el formulario de registro al cargar
document.getElementById('formRegistro').style.display = 'block'; // Muestra el formulario de registro
document.getElementById('formLogin').style.display = 'none'; // Oculta el formulario de inicio de sesión inicialmente


