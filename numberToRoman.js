function convertToRoman(num){
  const map = {
    M:  1000,
    CM: 900,
    D:  500,
    CD: 400,
    C:  100,
    XC: 90,
    L:  50,
    XL: 40,
    X:  10,
    IX: 9,
    V:  5,
    IV: 4,
    I:  1,
  };  
  
  // the initialization of the returned roman numeral
  let result = ''; 
  for (let key in map) {
    result += key.repeat(Math.floor(num / map[key]));
    // dividing and "allocating" the remaining number to the next mapped key occurrence
    num %= map[key];
  }
  return result;
};

console.log(convertToRoman(1023));
