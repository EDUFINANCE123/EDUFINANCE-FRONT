// Función para cargar los gastos
function cargarGastos() {
    const gastos = JSON.parse(localStorage.getItem('gastos')) || [];
    const gastosList = document.getElementById('gastos-list');

    // Limpiar la tabla antes de llenarla
    gastosList.innerHTML = '';

    // Agregar los gastos a la tabla
    gastos.forEach(gasto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${gasto.descripcion}</td>
            <td>${gasto.monto}</td>
            <td>${gasto.fecha}</td>
        `;
        gastosList.appendChild(row);
    });
}

// Llamar a la función al cargar la página
window.onload = cargarGastos;
