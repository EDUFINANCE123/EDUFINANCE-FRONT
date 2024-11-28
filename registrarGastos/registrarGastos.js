document.getElementById('gastoForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const descripcion = document.getElementById('descripcion').value;
    const categoria = document.getElementById('categoria').value;
    const monto = document.getElementById('monto').value;
    const fecha = document.getElementById('fecha').value;

    if (!descripcion || !categoria||!monto || !fecha) {
        alert('Por favor, rellena todos los campos.');
        return;
    }

    gasto = {
        user_id: 1,
        category_id: categoria,
        description: descripcion,
        cantidad: monto,
        fecha,
    }
    console.log(gasto);

    const resInsert = await fetch('http://localhost:8080/expenses/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(gasto)
    })
    const data = await resInsert.json();
    console.log('data', data);

    alert('Gasto registrado con éxito.');

    // Almacenar el gasto en localStorage
    // const gasto = {
    //     descripcion,
    //     categoria,
    //     monto,
    //     fecha
    // };

    // aqui lo mandamos a la API
    

    // let gastos = JSON.parse(localStorage.getItem('gastos')) || [];
    // gastos.push(gasto);
    // localStorage.setItem('gastos', JSON.stringify(gastos));

    // // Reiniciar el formulario
    // document.getElementById('gastoForm').reset();

});
