const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Karachi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1222db53ccmsh98585fdea794851p13830fjsn5bef00368517',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}