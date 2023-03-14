 window.addEventListener('load', ()=>{
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');
  let temperatureSection = document.querySelector(".temperature");
  const temperatureSpan = document.querySelector('.temperature span');

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = 'https://cors-anywhere.herokuapp.com/'

      const api = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=e32398326916d0e665609cd9a1a83057`;

      fetch(api)
        .then(response => {
          return response.json();
        })

        .then(data => {
          const { temperature, summary, icon } = data.current;

          //Set DOM Elements from the API
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;
          if(document.querySelector('.temperature-degree')) {
            console.log('element is present');
          } else {
            console.log('element not found');
          }
          if(document.querySelector('.location-timezone')) {
            console.log('element is present');
          } else {
            console.log('element not found');
          }
          console.log(data)
          
            //FORMULA FOR CELSIUS
            let celsius = (temperature - 32) * (5 / 9);

            //Set Icon
            setIcons(icon, document.querySelector('.icon'));
            console.log(icon);
            setIcons(icon, document.querySelector('.icon'));

            function setIcons(icon, iconID){
              const skycons = new Skycons({color: "white"});
              const currentIcon = icon.toUpperCase();
              skycons.play();
              return skycons.set(iconID, Skycons[currentIcon]);
            }
            


            //Change temperature to Celsius/Farenheit
            temperatureSection.addEventListener('click' , () =>{
              if(temperatureSpan.textContent === "F"){
                temperatureSpan.textContent = "C";
                temperatureDegree.textContent = Math.floor(celsius);
              }else{
                temperatureSpan.textContent = "F";
                temperatureDegree.textContent = temperature;
              }
            })
        });
    });

  }else {
    document.querySelector('h1').textContent = "Unable to get your location";
}

function setIcons(icon, iconID){
  const skycons = new Skycons({color: "white"});
  const currentIcon = icon.replace(/-/g, "_").toUpperCase();
  skycons.play();
  return skycons.set(iconID, Skycons.currentIcon);
}
});
