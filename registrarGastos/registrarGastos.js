document.addEventListener('DOMContentLoaded', (e) => {
    if(false){
        window.location.href = '../index.html'
    }
})

document.getElementById('gastoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const descripcion = document.getElementById('descripcion').value;
    const monto = document.getElementById('monto').value;
    const fecha = document.getElementById('fecha').value;
    const categoria = document.getElementById('categoria').value;

    if (!descripcion || !monto || !fecha || !categoria) {
        alert('Por favor, rellena todos los campos.');
        return;
    }

    const usuario = localStorage.getItem('email');

    // Almacenar el gasto en localStorage
    const gasto = { descripcion, monto, fecha, categoria, usuario };

    let gastos = JSON.parse(localStorage.getItem('gastos')) || [];
    gastos.push(gasto);
    localStorage.setItem('gastos', JSON.stringify(gastos));

    // Reiniciar el formulario
    document.getElementById('gastoForm').reset();

    alert('Gasto registrado con éxito.');
});
