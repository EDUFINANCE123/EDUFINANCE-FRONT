document.getElementById('registrarGastos').addEventListener('submit', function(event) {
    event.preventDefault();

    const monto = parseFloat(document.getElementById('monto').value);
    const fecha = document.getElementById('fecha').value;
    const categoria = document.getElementById('categoria').value;
    const resul = `monto: ${monto}, fecha: ${fecha}, categoria: ${categoria}`;

    localStorage.setItem('Gasto', resul);

    // Mostrar ventana modal
    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Limpiar el formulario después del envío
    document.getElementById('registrarGastos').reset();
});
