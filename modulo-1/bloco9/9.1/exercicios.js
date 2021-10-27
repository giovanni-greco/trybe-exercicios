// EXERCICIO 3

const getPlanet = () => { 
  setTimeout(() => { 
    const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars.name);}, 4000)
 
};

getPlanet(); // imprime Marte depois de 4 segundos

// EXERCICIO 4


const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// definição da função sendMarsTemperature...
// crie a função sendMarsTemperature abaixo

function sendMarsTemperature(delayCallback, tempCallback, action) {
  setTimeout(() => {
    const temperature = tempCallback
    console.log(tempCallback)
    
  }, delayCallback)
  
}

sendMarsTemperature(messageDelay(), getMarsTemperature(), temperatureInFahrenheit()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

