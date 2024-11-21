document.getElementById('gastoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const descripcion = document.getElementById('descripcion').value;
    const categoria = document.getElementById('categoria').value;
    const monto = document.getElementById('monto').value;
    const fecha = document.getElementById('fecha').value;

    if (!descripcion || !categoria||!monto || !fecha) {
        alert('Por favor, rellena todos los campos.');
        return;
    }

    // Almacenar el gasto en localStorage
    const gasto = {
        descripcion,
        categoria,
        monto,
        fecha
    };

    let gastos = JSON.parse(localStorage.getItem('gastos')) || [];
    gastos.push(gasto);
    localStorage.setItem('gastos', JSON.stringify(gastos));

    // Reiniciar el formulario
    document.getElementById('gastoForm').reset();

    alert('Gasto registrado con éxito.');
});
