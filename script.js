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
const generateAnotherButton = document.getElementById("generate-another");

// Evento para generar contraseñas
function handleGeneratePassword() {
  const length = parseInt(lengthInput.value);
  if (length >= 5 && length <= 128) {
    const password = generatePassword(length);
    passwordDisplay.textContent = password;
  } else {
    passwordDisplay.textContent = "La longitud debe estar entre 5 y 128.";
  }
}

generateButton.addEventListener("click", handleGeneratePassword);
generateAnotherButton.addEventListener("click", handleGeneratePassword);

// Evento para copiar contraseñas
copyButton.addEventListener("click", () => {
  const password = passwordDisplay.textContent;
  if (password && password !== "La longitud debe estar entre 5 y 128.") {
    navigator.clipboard.writeText(password).then(() => {
      alert("¡Contraseña copiada al portapapeles!");
    });
  } else {
    alert("Primero genera una contraseña válida.");
  }
});
