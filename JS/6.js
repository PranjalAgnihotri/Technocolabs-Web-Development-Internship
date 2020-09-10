const kelvin = 0;
//Convert to Celsius
const celsius = kelvin - 273;
//Convert to Fahrenheit, rounded down
var fahrenheit = Math.floor(celsius * (9 / 5) + 32);
//Displays temp in Fahrenheit
var a="The temperature is";
var b="degrees Fahrenheit.";
console.log(a+fahrenheit+b);
//Convert to Newton, rounded down
var newton = Math.floor(celsius * (33/100));
//Displays temp in Newton
var c="The temperature is";
var d=" degrees Newton.";
console.log(c+newton+d);
