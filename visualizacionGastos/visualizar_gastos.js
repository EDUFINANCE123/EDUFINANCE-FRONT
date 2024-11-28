const gastosList = document.getElementById('gastos-list');

// Función para cargar los gastos
async function cargarGastos() {
    const response = await fetch('http://localhost:8080/expenses')
    const gastosF = await response.json();
    console.log('gastosF', gastosF);

    const resCategory = await fetch('http://localhost:8080/categories');
    const categories = await resCategory.json();
    console.log('categories', categories);

    gastosF.forEach(gasto => {
        console.log('category', categories.find(cat => cat.id_category === gasto.category_id));
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${gasto.description}</td>
            <td>${categories.find(cat => cat.id_category === gasto.category_id).name_category}</td>
            <td>${gasto.cantidad}</td>
            <td>${new Date(gasto.fecha).toLocaleDateString()}</td>
        `;
        gastosList.appendChild(row);
    });


    const gastos = JSON.parse(localStorage.getItem('gastos')) || [];

    // Limpiar la tabla antes de llenarla
    // gastosList.innerHTML = '';

    // Agregar los gastos a la tabla
    // gastos.forEach(gasto => {
    //     const row = document.createElement('tr');
    //     row.innerHTML = `
    //         <td>${gasto.descripcion}</td>
    //         <td>${gasto.categoria}</td>
    //         <td>${gasto.monto}</td>
    //         <td>${gasto.fecha}</td>
    //     `;
    //     gastosList.appendChild(row);
    // });
}

// Llamar a la función al cargar la página
window.onload = cargarGastos;
