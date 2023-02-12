// get info from de HTML 
const celsius = document.querySelector('.celsius input');
const fahrenheit = document.querySelector('.fahrenheit input');
const kelvin = document.querySelector('.kelvin input');

// convert function
function convert() {
  if(celsius.value !== ''){
    const celsiusTofahrenheit = (celsius.value * 9/5) + 32;
    const celsiusToKelvin = celsius.value * 1 + 273.15;

    fahrenheit.value = celsiusTofahrenheit.toFixed(1);
    kelvin.value = celsiusToKelvin.toFixed(1);
  } else if(fahrenheit.value !== ''){
    const fahrenheitToCelsius = (fahrenheit.value - 32) * 5/9;
    const fahrenheitToKelvin = (fahrenheit.value - 32) * 5/9 + 273.15;

    celsius.value = fahrenheitToCelsius.toFixed(1);
    kelvin.value = fahrenheitToKelvin.toFixed(1);
  }
  else if(kelvin.value !== ''){
    const kelvinToCelsius = kelvin.value - 273.15;
    const kelvinToFahrenheit = (kelvin.value - 273.15) * 9/5 + 32;

    celsius.value = kelvinToCelsius.toFixed(1);
    fahrenheit.value = kelvinToFahrenheit.toFixed(1);
  }
}

// reset function
function reset(){
  celsius.value = '';
  fahrenheit.value = '';
  kelvin.value = '';
}

// formula for conversions
// const celsiusTofahrenheit = (celsius.value * 9/5) + 32;
// const celsiusToKelvin = celsius.value + 273.15;
// const fahrenheitToCelsius = (fahrenheit.value - 32) * 5/9;
// const fahrenheitToKelvin = (fahrenheit.value - 32) * 5/9 + 273.15;
// const kelvinToCelsius = kelvin.value - 273.15;
// const kelvinToFahrenheit = (kelvin.value - 273.15) * 9/5 + 32;