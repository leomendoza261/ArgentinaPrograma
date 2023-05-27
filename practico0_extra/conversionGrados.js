function convertirGrados(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  let celsius = 10;
  let fahrenheit = convertirGrados(celsius);
  console.log(celsius + " grados celsius => " + fahrenheit + " grados fahrenheint.");