const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1222db53ccmsh98585fdea794851p13830fjsn5bef00368517',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
}

const date = new Date();

let day = date.getDate();
let month = date.toLocaleString('default', { month: 'short' });
let year = date.getFullYear();

let currentDate = `${month},${day} ${year}`;
console.log(currentDate);

document.getElementById("currentDate").innerHTML =  currentDate;


document.getElementById("searchButton").addEventListener("click", getCountry);



async function getWeatherData(countryName) {
    try {
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${countryName}`, options);
        const result = await response.text();

        const resultJSON = JSON.parse(result);



        console.log(resultJSON);

        // Accessing DOM elements and updating them with weather data
        document.getElementById("temperature").innerHTML = resultJSON.temp + "°";
        document.getElementById("fl").innerHTML = resultJSON.feels_like + "°";
        document.getElementById("wd").innerHTML = resultJSON.wind_speed;
        document.getElementById("cld-pct").innerHTML = resultJSON.cloud_pct;
        document.getElementById("hm").innerHTML = resultJSON.humidity + "%";
        document.getElementById("maxtmp").innerHTML = resultJSON.max_temp + "°";
        document.getElementById("mintmp").innerHTML = resultJSON.min_temp + "°";

        console.log(resultJSON.temp);

        if (resultJSON.temp >= 25) {
            document.getElementById("image").src = "/images/clear.png";
            document.getElementById("weather").innerHTML = "Sunny";

            console.log("clear");
        }
        else if(resultJSON.temp >= 15){
            document.getElementById("image").src = "/images/clouds.png";
            document.getElementById("weather").innerHTML = "Cloudy";
        }
        else if(resultJSON.temp >= 5){
            document.getElementById("image").src = "/images/rain.png";
            document.getElementById("weather").innerHTML = "Rainy";
        }
        else if(resultJSON.temp >= 0){
            document.getElementById("image").src = "/images/drizzle.png";
            document.getElementById("weather").innerHTML = "Drizzle";
        }
        else{
            document.getElementById("image").src = "/images/snow.png";
            document.getElementById("weather").innerHTML = "Snowy";
        }

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




