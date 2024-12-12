function caesarCipher(text, shift, action) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const isUpperCase = (char) => char === char.toUpperCase();

    return text.split('').map((char) => {
        if (!/[a-zA-Z]/.test(char)) return char; // Abaikan karakter non-alfabet
        const isUpper = isUpperCase(char);
        const index = alphabet.indexOf(char.toLowerCase());
        const newIndex = action === 'encrypt'
            ? (index + shift) % 26
            : (index - shift + 26) % 26;

        return isUpper
            ? alphabet[newIndex].toUpperCase()
            : alphabet[newIndex];
    }).join('');
}

function encrypt() {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value) || 0;
    const result = caesarCipher(text, shift, 'encrypt');
    document.getElementById('result').textContent = result;
}

function decrypt() {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value) || 0;
    const result = caesarCipher(text, shift, 'decrypt');
    document.getElementById('result').textContent = result;
}
