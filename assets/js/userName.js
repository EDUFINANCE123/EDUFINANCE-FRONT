const ingresar = document.getElementById('ingresar');

const emailUser = sessionStorage.getItem('email');
const name = sessionStorage.getItem('name');

if (emailUser) {
    ingresar.innerHTML = name;
}