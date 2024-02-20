const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1222db53ccmsh98585fdea794851p13830fjsn5bef00368517',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

document.getElementById("searchButton").addEventListener("click", getCountry);



async function getWeatherData(countryName) {
    try {
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${countryName}`, options);
        const result = await response.text();
    
        const resultJSON = JSON.parse(result);
    
    
      
        console.log(resultJSON);

         // Accessing DOM elements and updating them with weather data
         document.getElementById("temperature").innerHTML = resultJSON.temp;
        document.getElementById("fl").innerHTML = resultJSON.feels_like;
        document.getElementById("wd").innerHTML = resultJSON.wind_speed;
        document.getElementById("cld-pct").innerHTML = resultJSON.cloud_pct;
        document.getElementById("hm").innerHTML = resultJSON.humidity;
        document.getElementById("maxtmp").innerHTML = resultJSON.max_temp;
        document.getElementById("mintmp").innerHTML = resultJSON.min_temp;

    
    
        console.log(resultJSON);
        console.log(resultJSON.temp);
    
    }
    catch (error) {
        console.error(error);
    }
}



function getCountry() {
    var countryValue = document.getElementById("country").value;
    console.log(countryValue);
    document.getElementById("location").innerHTML = countryValue;

    console.log("milrha hai");
    document.getElementById("country").value = "";
    getWeatherData(countryValue);
}




