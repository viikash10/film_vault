const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: 'squid'},
  headers: {
    'X-RapidAPI-Key': '0b320b2df1msh681b8f1cf2abab7p1a2290jsnbe4d3362b313',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}