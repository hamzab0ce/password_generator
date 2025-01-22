// Caracteres disponibles para la contraseña
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

// Elementos del DOM
const lengthInput = document.getElementById("length");
const passwordDisplay = document.getElementById("password");
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");

// Evento para generar contraseñas
generateButton.addEventListener("click", () => {
  const length = parseInt(lengthInput.value);
  if (length >= 6 && length <= 64) {
    const password = generatePassword(length);
    passwordDisplay.textContent = password;
  } else {
    passwordDisplay.textContent = "La longitud debe estar entre 6 y 64.";
  }
});

// Evento para copiar contraseñas
copyButton.addEventListener("click", () => {
  const password = passwordDisplay.textContent;
  if (password && password !== "Haz clic en \"Generar Contraseña\"") {
    navigator.clipboard.writeText(password).then(() => {
      alert("¡Contraseña copiada al portapapeles!");
    });
  } else {
    alert("Primero genera una contraseña.");
  }
});
