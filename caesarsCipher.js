function rot13(string) {
  string = string.toUpperCase();
  return string.replace(/[A-Z]/g, cipher);
  function cipher(letter) {
    const charCode = letter.charCodeAt();
    return String.fromCharCode(((charCode + 13) <= 90) 
    ? charCode + 13 
    : (charCode + 13) % 90 + 64
    );
  }
}

console.log(rot13("test string"));
