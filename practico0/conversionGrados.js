function convertirGrados(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
  }
  
  let fahrenheit = 70;
  let celsius = convertirGrados(fahrenheit);
  console.log(fahrenheit + " grados Fahrenheit => " + celsius + " grados Celsius.");