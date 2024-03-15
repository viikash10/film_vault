const axios = require('axios');

const options = {
 method: 'GET',
 url: 'https://imdb8.p.rapidapi.com/auto-complete',
 params: {q: 'the matrix'},
 headers: {
    'X-RapidAPI-Key': '0b320b2df1msh681b8f1cf2abab7p1a2290jsnbe4d3362b313',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
 }
};

// Wrap your code in an async function
async function fetchData() {
 try {
    const response = await axios.request(options);
    // Assuming the response contains a 'results' array and we're interested in the first result
    if (response.data.results && response.data.results.length > 0) {
        const firstResult = response.data.results[0];
        console.log("Browser-friendly URL:", firstResult.url);
    } else {
        console.log("No results found.");
    }
 } catch (error) {
    console.error(error);
 }
}

// Call the async function
export default fetchData();

