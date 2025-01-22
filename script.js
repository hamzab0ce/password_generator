const passwordInput = document.getElementById('password');
const lengthInput = document.getElementById('length');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={}[]|;:<>,.?/~`";

generateBtn.addEventListener('click', () => {
    const length = parseInt(lengthInput.value);
    const password = generatePassword(length);
    passwordInput.value = password;
});

copyBtn.addEventListener('click', ()
