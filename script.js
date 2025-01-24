document.addEventListener("DOMContentLoaded", () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:',.<>?/`~";

    const translations = {
        es: {
            title: "Generador de Contraseñas",
            languageLabel: "Idioma:",
            placeholder: "Tu contraseña aparecerá aquí",
            copy: "Copiar",
            generate: "Generar",
            length: "Longitud:",
            copied: "¡Contraseña copiada al portapapeles!",
            generateFirst: "Genera una contraseña primero.",
            invalidLength: "Por favor, elige una longitud entre 6 y 64."
        },
        en: {
            title: "Password Generator",
            languageLabel: "Language:",
            placeholder: "Your password will appear here",
            copy: "Copy",
            generate: "Generate",
            length: "Length:",
            copied: "Password copied to clipboard!",
            generateFirst: "Generate a password first.",
            invalidLength: "Please choose a length between 6 and 64."
        },
        de: {
            title: "Passwort-Generator",
            languageLabel: "Sprache:",
            placeholder: "Ihr Passwort wird hier angezeigt",
            copy: "Kopieren",
            generate: "Generieren",
            length: "Länge:",
            copied: "Passwort in die Zwischenablage kopiert!",
            generateFirst: "Erstellen Sie zuerst ein Passwort.",
            invalidLength: "Bitte wählen Sie eine Länge zwischen 6 und 64."
        }
    };

    const lengthInput = document.getElementById("length");
    const passwordDisplay = document.getElementById("password");
    const generateButton = document.getElementById("generate-btn");
    const copyButton = document.getElementById("copy-btn");
    const languageSelector = document.getElementById("language-selector");

    // Detectar el idioma del navegador y configurar traducción inicial
    const userLang = navigator.language.slice(0, 2); // "es", "en", "de"
    const defaultLang = translations[userLang] ? userLang : "en"; // Usar inglés si no está soportado
    setLanguage(defaultLang);

    // Cambiar idioma según el selector
    languageSelector.addEventListener("change", (event) => {
        const selectedLang = event.target.value;
        setLanguage(selectedLang);
    });

    // Función para establecer el idioma
    function setLanguage(lang) {
        const texts = translations[lang];
        document.getElementById("title").textContent = texts.title;
        document.getElementById("language-label").textContent = texts.languageLabel;
        passwordDisplay.placeholder = texts.placeholder;
        copyButton.textContent = texts.copy;
        generateButton.textContent = texts.generate;
        document.getElementById("length-label").textContent = texts.length;

        // Establecer el idioma del selector
        languageSelector.value = lang;
    }

    // Función para generar contraseñas
    function generatePassword(length) {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    }

    // Evento para generar contraseñas
    generateButton.addEventListener("click", () => {
        const length = parseInt(lengthInput.value);
        const lang = languageSelector.value;
        if (length >= 6 && length <= 64) {
            passwordDisplay.value = generatePassword(length);
        } else {
            alert(translations[lang].invalidLength);
        }
    });

    // Evento para copiar contraseñas
    copyButton.addEventListener("click", () => {
        const password = passwordDisplay.value;
        const lang = languageSelector.value;
        if (password) {
            navigator.clipboard.writeText(password).then(() => {
                alert(translations[lang].copied);
            });
        } else {
            alert(translations[lang].generateFirst);
        }
    });
});
