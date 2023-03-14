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

      const proxy = 'https://cors-anywhere.herokuapp.com/';   
        
      //const api = `${proxy}https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${long}?5bc2b4f40acfffa046713955a4370d52`;

      const api = '${proxy}https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid={c1660da1e108d8e09df7672f453f341f}';

      
      fetch(api)
        .then(response => {
          return response.json();
        })

        .then(data => {
          const { temperature, summary, icon } = data.currently;

          //Set DOM Elements from the API
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;

            //FORMULA FOR CELSIUS
            let celsius = (temperature - 32) * (5 / 9);

            //Set Icon
            setIcons(icon, document.querySelector('.icon'));

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

  }else{
      h1.textContent = "Unable your location"
  }

  function setIcons(icon, iconID){
    const skycons = new Skycons({color: "white"});
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    skycons.play();
    return skycons.set(iconID, Skycons [currentIcon]);
  }
});

