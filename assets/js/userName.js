// Obtener el nombre del usuario logueado desde localStorage
const currentUser = localStorage.getItem('currentUser');

// Si hay un usuario logueado, mostrar el mensaje de bienvenida
if (currentUser) {
    const welcomeMessage = document.createElement('p');
    welcomeMessage.textContent = `Bienvenido, ${currentUser}`;
    
    // Añadir el mensaje al header o en otro lugar adecuado en el HTML
    const header = document.querySelector('header');
    header.appendChild(welcomeMessage);
}
