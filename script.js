// Asegurarse de que el código se ejecuta solo después de cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/`~";

    // Función para generar contraseñas
    function generatePassword(length) {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }

    // Referencias a los elementos del DOM
    const lengthInput = document.getElementById("length");
    const passwordDisplay = document.getElementById("password");
    const generateButton = document.getElementById("generate-btn");
    const copyButton = document.getElementById("copy-btn");

    // Evento para generar contraseñas
    generateButton.addEventListener("click", () => {
        const length = parseInt(lengthInput.value);
        if (length >= 6 && length <= 64) {
            passwordDisplay.value = generatePassword(length); // Usamos value para el input
        } else {
            alert("Por favor, elige una longitud entre 6 y 64.");
        }
    });

    // Evento para copiar contraseñas
    copyButton.addEventListener("click", () => {
        const password = passwordDisplay.value; // Usamos value para el input
        if (password) {
            navigator.clipboard.writeText(password).then(() => {
                alert("¡Contraseña copiada al portapapeles!");
            });
        } else {
            alert("Genera una contraseña primero.");
        }
    });
});
