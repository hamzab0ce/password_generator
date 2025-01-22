const longitudInput = document.getElementById('longitud');
const generarButton = document.getElementById('generar');
const contrasenaInput = document.getElementById('contrasena');

generarButton.addEventListener('click', () => {
    const longitud = parseInt(longitudInput.value);
    if (isNaN(longitud) || longitud < 8) {
        alert('La longitud de la contraseña debe ser un número mayor o igual a 8');
        return;
    }

    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}:<>?';
    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
        contrasena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    contrasenaInput.value = contrasena;
});
