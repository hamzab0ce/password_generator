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
    const languageSelector = document.getElementById("language-selector");

    // Traducciones
    const translations = {
        es: {
            title: "Generador de Contraseñas",
            languageLabel: "Idioma:",
            lengthLabel: "Longitud:",
            generateButton: "Generar",
            copyButton: "Copiar",
            placeholder: "Tu contraseña aparecerá aquí",
            alertLength: "Por favor, elige una longitud entre 6 y 64.",
            alertCopied: "¡Contraseña copiada al portapapeles!",
            alertGenerateFirst: "Genera una contraseña primero."
        },
        en: {
            title: "Password Generator",
            languageLabel: "Language:",
            lengthLabel: "Length:",
            generateButton: "Generate",
            copyButton: "Copy",
            placeholder: "Your password will appear here",
            alertLength: "Please choose a length between 6 and 64.",
            alertCopied: "Password copied to clipboard!",
            alertGenerateFirst: "Generate a password first."
        },
        de: {
            title: "Passwortgenerator",
            languageLabel: "Sprache:",
            lengthLabel: "Länge:",
            generateButton: "Generieren",
            copyButton: "Kopieren",
            placeholder: "Ihr Passwort wird hier angezeigt",
            alertLength: "Bitte wählen Sie eine Länge zwischen 6 und 64.",
            alertCopied: "Passwort in die Zwischenablage kopiert!",
            alertGenerateFirst: "Erstellen Sie zuerst ein Passwort."
        }
    };

    // Función para cambiar el idioma
    function changeLanguage(lang) {
        const t = translations[lang];
        document.getElementById("title").textContent = t.title;
        document.getElementById("language-label").textContent = t.languageLabel;
        document.getElementById("length-label").textContent = t.lengthLabel;
        generateButton.textContent = t.generateButton;
        copyButton.textContent = t.copyButton;
        passwordDisplay.placeholder = t.placeholder;
    }

    // Detectar el idioma del navegador
    const browserLanguage = navigator.language.slice(0, 2); // Solo "es", "en", "de", etc.
    const defaultLanguage = translations[browserLanguage] ? browserLanguage : "en"; // Usar inglés como predeterminado
    languageSelector.value = defaultLanguage;
    changeLanguage(defaultLanguage);

    // Evento para cambiar el idioma manualmente
    languageSelector.addEventListener("change", () => {
        const selectedLanguage = languageSelector.value;
        changeLanguage(selectedLanguage);
    });

    // Evento para generar contraseñas
    generateButton.addEventListener("click", () => {
        const length = parseInt(lengthInput.value);
        if (length >= 6 && length <= 64) {
            passwordDisplay.value = generatePassword(length); // Usamos value para el input
        } else {
            alert(translations[languageSelector.value].alertLength);
        }
    });

    // Evento para copiar contraseñas
    copyButton.addEventListener("click", () => {
        const password = passwordDisplay.value; // Usamos value para el input
        if (password) {
            navigator.clipboard.writeText(password).then(() => {
                alert(translations[languageSelector.value].alertCopied);
            });
        } else {
            alert(translations[languageSelector.value].alertGenerateFirst);
        }
    });
});
